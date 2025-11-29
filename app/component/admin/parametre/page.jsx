"use client";
import { getSession } from "next-auth/react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useSession, signOut } from "next-auth/react";
import { User, Lock, Loader2 } from "lucide-react";
import Swal from "sweetalert2";
import LoadingPage from "@/app/component/loading/page";

export default function CompteParamPage() {
  const { data: session, update } = useSession();
  const [loading, setLoading] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [username, setUsername] = useState(session?.user?.Username || "");
  useEffect(() => {
    console.log(session);
    setUsername(session?.user?.Username);
  }, [session]);
  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Please log in to manage your account.</p>
      </div>
    );
  }

  // ✅ Update Username
  const handleUsernameChange = async () => {
    if (!username || username.length < 3) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Username",
        text: "Username must be at least 3 characters long.",
      });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/compte/username", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          oldUsername: session.user.Username,
          newUsername: username,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Username Updated",
          timer: 1500,
          showConfirmButton: false,
        });
        await update({
          user: { ...session.user, Username: username },
        });
        const refreshedSession = await getSession();
        console.log(refreshedSession.user);
        //  setUsername(username);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.error || "Unable to update username.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Failed to connect to the server.",
      });
    } finally {
      setLoading(false);
    }
  };

  // ✅ Change Password
  const handlePasswordChange = async () => {
    if (!newPassword || newPassword.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Weak Password",
        text: "Password must be at least 6 characters long.",
      });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/compte/password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Username: session.user.Username,
          password: newPassword,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Password Updated",
          timer: 1500,
          showConfirmButton: false,
        });
        setPasswordModal(false);
        setNewPassword("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.error || "Unable to change password.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Failed to connect to the server.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingPage isVisible={true} />}

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <Card className="w-full max-w-md shadow-xl border-none rounded-2xl bg-white">
          <CardContent className="p-8 space-y-6">
            {/* Profile Header */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-black text-white w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                <User size={50} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Account Settings
              </h2>
              <p className="text-sm text-gray-500">
                Modify your username and password.
              </p>
            </div>

            {/* Username Input */}
            <div className="space-y-4 mt-8">
              <div className="relative">
                <User
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <Input
                  className="pl-10"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center pt-2">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 w-full sm:w-auto"
                  onClick={() => setPasswordModal(true)}
                >
                  <Lock className="mr-2" size={16} /> Change Password
                </Button>

                <Button
                  className="bg-black text-white w-full sm:w-auto"
                  onClick={handleUsernameChange}
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2 className="animate-spin mr-2" size={16} />
                  ) : null}
                  Save Username
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 🔐 Password Modal */}
      <Dialog open={passwordModal} onOpenChange={setPasswordModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <Input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4 sm:justify-end">
            <Button variant="outline" onClick={() => setPasswordModal(false)}>
              Cancel
            </Button>
            <Button
              className="bg-black text-white"
              onClick={handlePasswordChange}
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
