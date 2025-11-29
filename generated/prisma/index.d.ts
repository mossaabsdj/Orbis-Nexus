
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Compte
 * 
 */
export type Compte = $Result.DefaultSelection<Prisma.$ComptePayload>
/**
 * Model Commande
 * 
 */
export type Commande = $Result.DefaultSelection<Prisma.$CommandePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  CLIENT: 'CLIENT',
  FARMER: 'FARMER',
  DELIVERY: 'DELIVERY'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Comptes
 * const comptes = await prisma.compte.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Comptes
   * const comptes = await prisma.compte.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.compte`: Exposes CRUD operations for the **Compte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comptes
    * const comptes = await prisma.compte.findMany()
    * ```
    */
  get compte(): Prisma.CompteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commande`: Exposes CRUD operations for the **Commande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commandes
    * const commandes = await prisma.commande.findMany()
    * ```
    */
  get commande(): Prisma.CommandeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Compte: 'Compte',
    Commande: 'Commande',
    Product: 'Product'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "compte" | "commande" | "product"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Compte: {
        payload: Prisma.$ComptePayload<ExtArgs>
        fields: Prisma.CompteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          findFirst: {
            args: Prisma.CompteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          findMany: {
            args: Prisma.CompteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>[]
          }
          create: {
            args: Prisma.CompteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          createMany: {
            args: Prisma.CompteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>[]
          }
          delete: {
            args: Prisma.CompteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          update: {
            args: Prisma.CompteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          deleteMany: {
            args: Prisma.CompteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>[]
          }
          upsert: {
            args: Prisma.CompteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          aggregate: {
            args: Prisma.CompteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompte>
          }
          groupBy: {
            args: Prisma.CompteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompteCountArgs<ExtArgs>
            result: $Utils.Optional<CompteCountAggregateOutputType> | number
          }
        }
      }
      Commande: {
        payload: Prisma.$CommandePayload<ExtArgs>
        fields: Prisma.CommandeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommandeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommandeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          findFirst: {
            args: Prisma.CommandeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommandeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          findMany: {
            args: Prisma.CommandeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>[]
          }
          create: {
            args: Prisma.CommandeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          createMany: {
            args: Prisma.CommandeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommandeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>[]
          }
          delete: {
            args: Prisma.CommandeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          update: {
            args: Prisma.CommandeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          deleteMany: {
            args: Prisma.CommandeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommandeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommandeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>[]
          }
          upsert: {
            args: Prisma.CommandeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          aggregate: {
            args: Prisma.CommandeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommande>
          }
          groupBy: {
            args: Prisma.CommandeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommandeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommandeCountArgs<ExtArgs>
            result: $Utils.Optional<CommandeCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    compte?: CompteOmit
    commande?: CommandeOmit
    product?: ProductOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompteCountOutputType
   */

  export type CompteCountOutputType = {
    commandes: number
  }

  export type CompteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commandes?: boolean | CompteCountOutputTypeCountCommandesArgs
  }

  // Custom InputTypes
  /**
   * CompteCountOutputType without action
   */
  export type CompteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompteCountOutputType
     */
    select?: CompteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompteCountOutputType without action
   */
  export type CompteCountOutputTypeCountCommandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    commandes: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commandes?: boolean | ProductCountOutputTypeCountCommandesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCommandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Compte
   */

  export type AggregateCompte = {
    _count: CompteCountAggregateOutputType | null
    _avg: CompteAvgAggregateOutputType | null
    _sum: CompteSumAggregateOutputType | null
    _min: CompteMinAggregateOutputType | null
    _max: CompteMaxAggregateOutputType | null
  }

  export type CompteAvgAggregateOutputType = {
    id: number | null
  }

  export type CompteSumAggregateOutputType = {
    id: number | null
  }

  export type CompteMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    phone: string | null
    country: string | null
    Password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type CompteMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    phone: string | null
    country: string | null
    Password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type CompteCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    phone: number
    country: number
    Password: number
    role: number
    createdAt: number
    _all: number
  }


  export type CompteAvgAggregateInputType = {
    id?: true
  }

  export type CompteSumAggregateInputType = {
    id?: true
  }

  export type CompteMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    country?: true
    Password?: true
    role?: true
    createdAt?: true
  }

  export type CompteMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    country?: true
    Password?: true
    role?: true
    createdAt?: true
  }

  export type CompteCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    country?: true
    Password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type CompteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compte to aggregate.
     */
    where?: CompteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comptes to fetch.
     */
    orderBy?: CompteOrderByWithRelationInput | CompteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comptes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comptes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comptes
    **/
    _count?: true | CompteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompteMaxAggregateInputType
  }

  export type GetCompteAggregateType<T extends CompteAggregateArgs> = {
        [P in keyof T & keyof AggregateCompte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompte[P]>
      : GetScalarType<T[P], AggregateCompte[P]>
  }




  export type CompteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompteWhereInput
    orderBy?: CompteOrderByWithAggregationInput | CompteOrderByWithAggregationInput[]
    by: CompteScalarFieldEnum[] | CompteScalarFieldEnum
    having?: CompteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompteCountAggregateInputType | true
    _avg?: CompteAvgAggregateInputType
    _sum?: CompteSumAggregateInputType
    _min?: CompteMinAggregateInputType
    _max?: CompteMaxAggregateInputType
  }

  export type CompteGroupByOutputType = {
    id: number
    fullName: string
    email: string
    phone: string | null
    country: string | null
    Password: string
    role: $Enums.Role
    createdAt: Date
    _count: CompteCountAggregateOutputType | null
    _avg: CompteAvgAggregateOutputType | null
    _sum: CompteSumAggregateOutputType | null
    _min: CompteMinAggregateOutputType | null
    _max: CompteMaxAggregateOutputType | null
  }

  type GetCompteGroupByPayload<T extends CompteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompteGroupByOutputType[P]>
            : GetScalarType<T[P], CompteGroupByOutputType[P]>
        }
      >
    >


  export type CompteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    Password?: boolean
    role?: boolean
    createdAt?: boolean
    commandes?: boolean | Compte$commandesArgs<ExtArgs>
    _count?: boolean | CompteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compte"]>

  export type CompteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    Password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["compte"]>

  export type CompteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    Password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["compte"]>

  export type CompteSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    Password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type CompteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "phone" | "country" | "Password" | "role" | "createdAt", ExtArgs["result"]["compte"]>
  export type CompteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commandes?: boolean | Compte$commandesArgs<ExtArgs>
    _count?: boolean | CompteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ComptePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Compte"
    objects: {
      commandes: Prisma.$CommandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      email: string
      phone: string | null
      country: string | null
      Password: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["compte"]>
    composites: {}
  }

  type CompteGetPayload<S extends boolean | null | undefined | CompteDefaultArgs> = $Result.GetResult<Prisma.$ComptePayload, S>

  type CompteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompteCountAggregateInputType | true
    }

  export interface CompteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Compte'], meta: { name: 'Compte' } }
    /**
     * Find zero or one Compte that matches the filter.
     * @param {CompteFindUniqueArgs} args - Arguments to find a Compte
     * @example
     * // Get one Compte
     * const compte = await prisma.compte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompteFindUniqueArgs>(args: SelectSubset<T, CompteFindUniqueArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Compte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompteFindUniqueOrThrowArgs} args - Arguments to find a Compte
     * @example
     * // Get one Compte
     * const compte = await prisma.compte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompteFindUniqueOrThrowArgs>(args: SelectSubset<T, CompteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteFindFirstArgs} args - Arguments to find a Compte
     * @example
     * // Get one Compte
     * const compte = await prisma.compte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompteFindFirstArgs>(args?: SelectSubset<T, CompteFindFirstArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteFindFirstOrThrowArgs} args - Arguments to find a Compte
     * @example
     * // Get one Compte
     * const compte = await prisma.compte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompteFindFirstOrThrowArgs>(args?: SelectSubset<T, CompteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comptes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comptes
     * const comptes = await prisma.compte.findMany()
     * 
     * // Get first 10 Comptes
     * const comptes = await prisma.compte.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compteWithIdOnly = await prisma.compte.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompteFindManyArgs>(args?: SelectSubset<T, CompteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Compte.
     * @param {CompteCreateArgs} args - Arguments to create a Compte.
     * @example
     * // Create one Compte
     * const Compte = await prisma.compte.create({
     *   data: {
     *     // ... data to create a Compte
     *   }
     * })
     * 
     */
    create<T extends CompteCreateArgs>(args: SelectSubset<T, CompteCreateArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comptes.
     * @param {CompteCreateManyArgs} args - Arguments to create many Comptes.
     * @example
     * // Create many Comptes
     * const compte = await prisma.compte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompteCreateManyArgs>(args?: SelectSubset<T, CompteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comptes and returns the data saved in the database.
     * @param {CompteCreateManyAndReturnArgs} args - Arguments to create many Comptes.
     * @example
     * // Create many Comptes
     * const compte = await prisma.compte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comptes and only return the `id`
     * const compteWithIdOnly = await prisma.compte.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompteCreateManyAndReturnArgs>(args?: SelectSubset<T, CompteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Compte.
     * @param {CompteDeleteArgs} args - Arguments to delete one Compte.
     * @example
     * // Delete one Compte
     * const Compte = await prisma.compte.delete({
     *   where: {
     *     // ... filter to delete one Compte
     *   }
     * })
     * 
     */
    delete<T extends CompteDeleteArgs>(args: SelectSubset<T, CompteDeleteArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Compte.
     * @param {CompteUpdateArgs} args - Arguments to update one Compte.
     * @example
     * // Update one Compte
     * const compte = await prisma.compte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompteUpdateArgs>(args: SelectSubset<T, CompteUpdateArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comptes.
     * @param {CompteDeleteManyArgs} args - Arguments to filter Comptes to delete.
     * @example
     * // Delete a few Comptes
     * const { count } = await prisma.compte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompteDeleteManyArgs>(args?: SelectSubset<T, CompteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comptes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comptes
     * const compte = await prisma.compte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompteUpdateManyArgs>(args: SelectSubset<T, CompteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comptes and returns the data updated in the database.
     * @param {CompteUpdateManyAndReturnArgs} args - Arguments to update many Comptes.
     * @example
     * // Update many Comptes
     * const compte = await prisma.compte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comptes and only return the `id`
     * const compteWithIdOnly = await prisma.compte.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompteUpdateManyAndReturnArgs>(args: SelectSubset<T, CompteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Compte.
     * @param {CompteUpsertArgs} args - Arguments to update or create a Compte.
     * @example
     * // Update or create a Compte
     * const compte = await prisma.compte.upsert({
     *   create: {
     *     // ... data to create a Compte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compte we want to update
     *   }
     * })
     */
    upsert<T extends CompteUpsertArgs>(args: SelectSubset<T, CompteUpsertArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comptes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteCountArgs} args - Arguments to filter Comptes to count.
     * @example
     * // Count the number of Comptes
     * const count = await prisma.compte.count({
     *   where: {
     *     // ... the filter for the Comptes we want to count
     *   }
     * })
    **/
    count<T extends CompteCountArgs>(
      args?: Subset<T, CompteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompteAggregateArgs>(args: Subset<T, CompteAggregateArgs>): Prisma.PrismaPromise<GetCompteAggregateType<T>>

    /**
     * Group by Compte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompteGroupByArgs['orderBy'] }
        : { orderBy?: CompteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Compte model
   */
  readonly fields: CompteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Compte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commandes<T extends Compte$commandesArgs<ExtArgs> = {}>(args?: Subset<T, Compte$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Compte model
   */
  interface CompteFieldRefs {
    readonly id: FieldRef<"Compte", 'Int'>
    readonly fullName: FieldRef<"Compte", 'String'>
    readonly email: FieldRef<"Compte", 'String'>
    readonly phone: FieldRef<"Compte", 'String'>
    readonly country: FieldRef<"Compte", 'String'>
    readonly Password: FieldRef<"Compte", 'String'>
    readonly role: FieldRef<"Compte", 'Role'>
    readonly createdAt: FieldRef<"Compte", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Compte findUnique
   */
  export type CompteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * Filter, which Compte to fetch.
     */
    where: CompteWhereUniqueInput
  }

  /**
   * Compte findUniqueOrThrow
   */
  export type CompteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * Filter, which Compte to fetch.
     */
    where: CompteWhereUniqueInput
  }

  /**
   * Compte findFirst
   */
  export type CompteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * Filter, which Compte to fetch.
     */
    where?: CompteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comptes to fetch.
     */
    orderBy?: CompteOrderByWithRelationInput | CompteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comptes.
     */
    cursor?: CompteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comptes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comptes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comptes.
     */
    distinct?: CompteScalarFieldEnum | CompteScalarFieldEnum[]
  }

  /**
   * Compte findFirstOrThrow
   */
  export type CompteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * Filter, which Compte to fetch.
     */
    where?: CompteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comptes to fetch.
     */
    orderBy?: CompteOrderByWithRelationInput | CompteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comptes.
     */
    cursor?: CompteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comptes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comptes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comptes.
     */
    distinct?: CompteScalarFieldEnum | CompteScalarFieldEnum[]
  }

  /**
   * Compte findMany
   */
  export type CompteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * Filter, which Comptes to fetch.
     */
    where?: CompteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comptes to fetch.
     */
    orderBy?: CompteOrderByWithRelationInput | CompteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comptes.
     */
    cursor?: CompteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comptes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comptes.
     */
    skip?: number
    distinct?: CompteScalarFieldEnum | CompteScalarFieldEnum[]
  }

  /**
   * Compte create
   */
  export type CompteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * The data needed to create a Compte.
     */
    data: XOR<CompteCreateInput, CompteUncheckedCreateInput>
  }

  /**
   * Compte createMany
   */
  export type CompteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comptes.
     */
    data: CompteCreateManyInput | CompteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Compte createManyAndReturn
   */
  export type CompteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * The data used to create many Comptes.
     */
    data: CompteCreateManyInput | CompteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Compte update
   */
  export type CompteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * The data needed to update a Compte.
     */
    data: XOR<CompteUpdateInput, CompteUncheckedUpdateInput>
    /**
     * Choose, which Compte to update.
     */
    where: CompteWhereUniqueInput
  }

  /**
   * Compte updateMany
   */
  export type CompteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comptes.
     */
    data: XOR<CompteUpdateManyMutationInput, CompteUncheckedUpdateManyInput>
    /**
     * Filter which Comptes to update
     */
    where?: CompteWhereInput
    /**
     * Limit how many Comptes to update.
     */
    limit?: number
  }

  /**
   * Compte updateManyAndReturn
   */
  export type CompteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * The data used to update Comptes.
     */
    data: XOR<CompteUpdateManyMutationInput, CompteUncheckedUpdateManyInput>
    /**
     * Filter which Comptes to update
     */
    where?: CompteWhereInput
    /**
     * Limit how many Comptes to update.
     */
    limit?: number
  }

  /**
   * Compte upsert
   */
  export type CompteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * The filter to search for the Compte to update in case it exists.
     */
    where: CompteWhereUniqueInput
    /**
     * In case the Compte found by the `where` argument doesn't exist, create a new Compte with this data.
     */
    create: XOR<CompteCreateInput, CompteUncheckedCreateInput>
    /**
     * In case the Compte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompteUpdateInput, CompteUncheckedUpdateInput>
  }

  /**
   * Compte delete
   */
  export type CompteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * Filter which Compte to delete.
     */
    where: CompteWhereUniqueInput
  }

  /**
   * Compte deleteMany
   */
  export type CompteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comptes to delete
     */
    where?: CompteWhereInput
    /**
     * Limit how many Comptes to delete.
     */
    limit?: number
  }

  /**
   * Compte.commandes
   */
  export type Compte$commandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    cursor?: CommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Compte without action
   */
  export type CompteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
  }


  /**
   * Model Commande
   */

  export type AggregateCommande = {
    _count: CommandeCountAggregateOutputType | null
    _avg: CommandeAvgAggregateOutputType | null
    _sum: CommandeSumAggregateOutputType | null
    _min: CommandeMinAggregateOutputType | null
    _max: CommandeMaxAggregateOutputType | null
  }

  export type CommandeAvgAggregateOutputType = {
    id: number | null
    quantite: number | null
    productId: number | null
    compteId: number | null
  }

  export type CommandeSumAggregateOutputType = {
    id: number | null
    quantite: number | null
    productId: number | null
    compteId: number | null
  }

  export type CommandeMinAggregateOutputType = {
    id: number | null
    emballage: string | null
    adresse: string | null
    quantite: number | null
    productId: number | null
    compteId: number | null
    status: boolean | null
    Date: Date | null
  }

  export type CommandeMaxAggregateOutputType = {
    id: number | null
    emballage: string | null
    adresse: string | null
    quantite: number | null
    productId: number | null
    compteId: number | null
    status: boolean | null
    Date: Date | null
  }

  export type CommandeCountAggregateOutputType = {
    id: number
    emballage: number
    adresse: number
    quantite: number
    productId: number
    compteId: number
    status: number
    Date: number
    _all: number
  }


  export type CommandeAvgAggregateInputType = {
    id?: true
    quantite?: true
    productId?: true
    compteId?: true
  }

  export type CommandeSumAggregateInputType = {
    id?: true
    quantite?: true
    productId?: true
    compteId?: true
  }

  export type CommandeMinAggregateInputType = {
    id?: true
    emballage?: true
    adresse?: true
    quantite?: true
    productId?: true
    compteId?: true
    status?: true
    Date?: true
  }

  export type CommandeMaxAggregateInputType = {
    id?: true
    emballage?: true
    adresse?: true
    quantite?: true
    productId?: true
    compteId?: true
    status?: true
    Date?: true
  }

  export type CommandeCountAggregateInputType = {
    id?: true
    emballage?: true
    adresse?: true
    quantite?: true
    productId?: true
    compteId?: true
    status?: true
    Date?: true
    _all?: true
  }

  export type CommandeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commande to aggregate.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commandes
    **/
    _count?: true | CommandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommandeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommandeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandeMaxAggregateInputType
  }

  export type GetCommandeAggregateType<T extends CommandeAggregateArgs> = {
        [P in keyof T & keyof AggregateCommande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommande[P]>
      : GetScalarType<T[P], AggregateCommande[P]>
  }




  export type CommandeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithAggregationInput | CommandeOrderByWithAggregationInput[]
    by: CommandeScalarFieldEnum[] | CommandeScalarFieldEnum
    having?: CommandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandeCountAggregateInputType | true
    _avg?: CommandeAvgAggregateInputType
    _sum?: CommandeSumAggregateInputType
    _min?: CommandeMinAggregateInputType
    _max?: CommandeMaxAggregateInputType
  }

  export type CommandeGroupByOutputType = {
    id: number
    emballage: string
    adresse: string
    quantite: number
    productId: number
    compteId: number
    status: boolean | null
    Date: Date
    _count: CommandeCountAggregateOutputType | null
    _avg: CommandeAvgAggregateOutputType | null
    _sum: CommandeSumAggregateOutputType | null
    _min: CommandeMinAggregateOutputType | null
    _max: CommandeMaxAggregateOutputType | null
  }

  type GetCommandeGroupByPayload<T extends CommandeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandeGroupByOutputType[P]>
            : GetScalarType<T[P], CommandeGroupByOutputType[P]>
        }
      >
    >


  export type CommandeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emballage?: boolean
    adresse?: boolean
    quantite?: boolean
    productId?: boolean
    compteId?: boolean
    status?: boolean
    Date?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    compte?: boolean | CompteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type CommandeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emballage?: boolean
    adresse?: boolean
    quantite?: boolean
    productId?: boolean
    compteId?: boolean
    status?: boolean
    Date?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    compte?: boolean | CompteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type CommandeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emballage?: boolean
    adresse?: boolean
    quantite?: boolean
    productId?: boolean
    compteId?: boolean
    status?: boolean
    Date?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    compte?: boolean | CompteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type CommandeSelectScalar = {
    id?: boolean
    emballage?: boolean
    adresse?: boolean
    quantite?: boolean
    productId?: boolean
    compteId?: boolean
    status?: boolean
    Date?: boolean
  }

  export type CommandeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "emballage" | "adresse" | "quantite" | "productId" | "compteId" | "status" | "Date", ExtArgs["result"]["commande"]>
  export type CommandeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    compte?: boolean | CompteDefaultArgs<ExtArgs>
  }
  export type CommandeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    compte?: boolean | CompteDefaultArgs<ExtArgs>
  }
  export type CommandeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    compte?: boolean | CompteDefaultArgs<ExtArgs>
  }

  export type $CommandePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commande"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      compte: Prisma.$ComptePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      emballage: string
      adresse: string
      quantite: number
      productId: number
      compteId: number
      status: boolean | null
      Date: Date
    }, ExtArgs["result"]["commande"]>
    composites: {}
  }

  type CommandeGetPayload<S extends boolean | null | undefined | CommandeDefaultArgs> = $Result.GetResult<Prisma.$CommandePayload, S>

  type CommandeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommandeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommandeCountAggregateInputType | true
    }

  export interface CommandeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commande'], meta: { name: 'Commande' } }
    /**
     * Find zero or one Commande that matches the filter.
     * @param {CommandeFindUniqueArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommandeFindUniqueArgs>(args: SelectSubset<T, CommandeFindUniqueArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commande that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommandeFindUniqueOrThrowArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommandeFindUniqueOrThrowArgs>(args: SelectSubset<T, CommandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindFirstArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommandeFindFirstArgs>(args?: SelectSubset<T, CommandeFindFirstArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindFirstOrThrowArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommandeFindFirstOrThrowArgs>(args?: SelectSubset<T, CommandeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commandes
     * const commandes = await prisma.commande.findMany()
     * 
     * // Get first 10 Commandes
     * const commandes = await prisma.commande.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commandeWithIdOnly = await prisma.commande.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommandeFindManyArgs>(args?: SelectSubset<T, CommandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commande.
     * @param {CommandeCreateArgs} args - Arguments to create a Commande.
     * @example
     * // Create one Commande
     * const Commande = await prisma.commande.create({
     *   data: {
     *     // ... data to create a Commande
     *   }
     * })
     * 
     */
    create<T extends CommandeCreateArgs>(args: SelectSubset<T, CommandeCreateArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commandes.
     * @param {CommandeCreateManyArgs} args - Arguments to create many Commandes.
     * @example
     * // Create many Commandes
     * const commande = await prisma.commande.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommandeCreateManyArgs>(args?: SelectSubset<T, CommandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commandes and returns the data saved in the database.
     * @param {CommandeCreateManyAndReturnArgs} args - Arguments to create many Commandes.
     * @example
     * // Create many Commandes
     * const commande = await prisma.commande.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commandes and only return the `id`
     * const commandeWithIdOnly = await prisma.commande.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommandeCreateManyAndReturnArgs>(args?: SelectSubset<T, CommandeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commande.
     * @param {CommandeDeleteArgs} args - Arguments to delete one Commande.
     * @example
     * // Delete one Commande
     * const Commande = await prisma.commande.delete({
     *   where: {
     *     // ... filter to delete one Commande
     *   }
     * })
     * 
     */
    delete<T extends CommandeDeleteArgs>(args: SelectSubset<T, CommandeDeleteArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commande.
     * @param {CommandeUpdateArgs} args - Arguments to update one Commande.
     * @example
     * // Update one Commande
     * const commande = await prisma.commande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommandeUpdateArgs>(args: SelectSubset<T, CommandeUpdateArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commandes.
     * @param {CommandeDeleteManyArgs} args - Arguments to filter Commandes to delete.
     * @example
     * // Delete a few Commandes
     * const { count } = await prisma.commande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommandeDeleteManyArgs>(args?: SelectSubset<T, CommandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commandes
     * const commande = await prisma.commande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommandeUpdateManyArgs>(args: SelectSubset<T, CommandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commandes and returns the data updated in the database.
     * @param {CommandeUpdateManyAndReturnArgs} args - Arguments to update many Commandes.
     * @example
     * // Update many Commandes
     * const commande = await prisma.commande.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commandes and only return the `id`
     * const commandeWithIdOnly = await prisma.commande.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommandeUpdateManyAndReturnArgs>(args: SelectSubset<T, CommandeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commande.
     * @param {CommandeUpsertArgs} args - Arguments to update or create a Commande.
     * @example
     * // Update or create a Commande
     * const commande = await prisma.commande.upsert({
     *   create: {
     *     // ... data to create a Commande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commande we want to update
     *   }
     * })
     */
    upsert<T extends CommandeUpsertArgs>(args: SelectSubset<T, CommandeUpsertArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeCountArgs} args - Arguments to filter Commandes to count.
     * @example
     * // Count the number of Commandes
     * const count = await prisma.commande.count({
     *   where: {
     *     // ... the filter for the Commandes we want to count
     *   }
     * })
    **/
    count<T extends CommandeCountArgs>(
      args?: Subset<T, CommandeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommandeAggregateArgs>(args: Subset<T, CommandeAggregateArgs>): Prisma.PrismaPromise<GetCommandeAggregateType<T>>

    /**
     * Group by Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommandeGroupByArgs['orderBy'] }
        : { orderBy?: CommandeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commande model
   */
  readonly fields: CommandeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommandeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    compte<T extends CompteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompteDefaultArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Commande model
   */
  interface CommandeFieldRefs {
    readonly id: FieldRef<"Commande", 'Int'>
    readonly emballage: FieldRef<"Commande", 'String'>
    readonly adresse: FieldRef<"Commande", 'String'>
    readonly quantite: FieldRef<"Commande", 'Int'>
    readonly productId: FieldRef<"Commande", 'Int'>
    readonly compteId: FieldRef<"Commande", 'Int'>
    readonly status: FieldRef<"Commande", 'Boolean'>
    readonly Date: FieldRef<"Commande", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Commande findUnique
   */
  export type CommandeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande findUniqueOrThrow
   */
  export type CommandeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande findFirst
   */
  export type CommandeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commandes.
     */
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande findFirstOrThrow
   */
  export type CommandeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commandes.
     */
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande findMany
   */
  export type CommandeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commandes to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande create
   */
  export type CommandeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The data needed to create a Commande.
     */
    data: XOR<CommandeCreateInput, CommandeUncheckedCreateInput>
  }

  /**
   * Commande createMany
   */
  export type CommandeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commandes.
     */
    data: CommandeCreateManyInput | CommandeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commande createManyAndReturn
   */
  export type CommandeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * The data used to create many Commandes.
     */
    data: CommandeCreateManyInput | CommandeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commande update
   */
  export type CommandeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The data needed to update a Commande.
     */
    data: XOR<CommandeUpdateInput, CommandeUncheckedUpdateInput>
    /**
     * Choose, which Commande to update.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande updateMany
   */
  export type CommandeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commandes.
     */
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyInput>
    /**
     * Filter which Commandes to update
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to update.
     */
    limit?: number
  }

  /**
   * Commande updateManyAndReturn
   */
  export type CommandeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * The data used to update Commandes.
     */
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyInput>
    /**
     * Filter which Commandes to update
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commande upsert
   */
  export type CommandeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The filter to search for the Commande to update in case it exists.
     */
    where: CommandeWhereUniqueInput
    /**
     * In case the Commande found by the `where` argument doesn't exist, create a new Commande with this data.
     */
    create: XOR<CommandeCreateInput, CommandeUncheckedCreateInput>
    /**
     * In case the Commande was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommandeUpdateInput, CommandeUncheckedUpdateInput>
  }

  /**
   * Commande delete
   */
  export type CommandeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter which Commande to delete.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande deleteMany
   */
  export type CommandeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commandes to delete
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to delete.
     */
    limit?: number
  }

  /**
   * Commande without action
   */
  export type CommandeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    prix: number | null
    farmId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    prix: number | null
    farmId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    title: string | null
    desc: string | null
    prix: number | null
    emballage: string | null
    farmId: number | null
    image: string | null
    Date: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    title: string | null
    desc: string | null
    prix: number | null
    emballage: string | null
    farmId: number | null
    image: string | null
    Date: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    title: number
    desc: number
    prix: number
    emballage: number
    farmId: number
    image: number
    Date: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    prix?: true
    farmId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    prix?: true
    farmId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    prix?: true
    emballage?: true
    farmId?: true
    image?: true
    Date?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    prix?: true
    emballage?: true
    farmId?: true
    image?: true
    Date?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    prix?: true
    emballage?: true
    farmId?: true
    image?: true
    Date?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    title: string
    desc: string
    prix: number
    emballage: string
    farmId: number | null
    image: string
    Date: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    desc?: boolean
    prix?: boolean
    emballage?: boolean
    farmId?: boolean
    image?: boolean
    Date?: boolean
    commandes?: boolean | Product$commandesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    desc?: boolean
    prix?: boolean
    emballage?: boolean
    farmId?: boolean
    image?: boolean
    Date?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    desc?: boolean
    prix?: boolean
    emballage?: boolean
    farmId?: boolean
    image?: boolean
    Date?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    title?: boolean
    desc?: boolean
    prix?: boolean
    emballage?: boolean
    farmId?: boolean
    image?: boolean
    Date?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "desc" | "prix" | "emballage" | "farmId" | "image" | "Date", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commandes?: boolean | Product$commandesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      commandes: Prisma.$CommandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      desc: string
      prix: number
      emballage: string
      farmId: number | null
      image: string
      Date: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commandes<T extends Product$commandesArgs<ExtArgs> = {}>(args?: Subset<T, Product$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly title: FieldRef<"Product", 'String'>
    readonly desc: FieldRef<"Product", 'String'>
    readonly prix: FieldRef<"Product", 'Float'>
    readonly emballage: FieldRef<"Product", 'String'>
    readonly farmId: FieldRef<"Product", 'Int'>
    readonly image: FieldRef<"Product", 'String'>
    readonly Date: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data?: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.commandes
   */
  export type Product$commandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    cursor?: CommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompteScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    country: 'country',
    Password: 'Password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type CompteScalarFieldEnum = (typeof CompteScalarFieldEnum)[keyof typeof CompteScalarFieldEnum]


  export const CommandeScalarFieldEnum: {
    id: 'id',
    emballage: 'emballage',
    adresse: 'adresse',
    quantite: 'quantite',
    productId: 'productId',
    compteId: 'compteId',
    status: 'status',
    Date: 'Date'
  };

  export type CommandeScalarFieldEnum = (typeof CommandeScalarFieldEnum)[keyof typeof CommandeScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    desc: 'desc',
    prix: 'prix',
    emballage: 'emballage',
    farmId: 'farmId',
    image: 'image',
    Date: 'Date'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CompteWhereInput = {
    AND?: CompteWhereInput | CompteWhereInput[]
    OR?: CompteWhereInput[]
    NOT?: CompteWhereInput | CompteWhereInput[]
    id?: IntFilter<"Compte"> | number
    fullName?: StringFilter<"Compte"> | string
    email?: StringFilter<"Compte"> | string
    phone?: StringNullableFilter<"Compte"> | string | null
    country?: StringNullableFilter<"Compte"> | string | null
    Password?: StringFilter<"Compte"> | string
    role?: EnumRoleFilter<"Compte"> | $Enums.Role
    createdAt?: DateTimeFilter<"Compte"> | Date | string
    commandes?: CommandeListRelationFilter
  }

  export type CompteOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    Password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    commandes?: CommandeOrderByRelationAggregateInput
  }

  export type CompteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: CompteWhereInput | CompteWhereInput[]
    OR?: CompteWhereInput[]
    NOT?: CompteWhereInput | CompteWhereInput[]
    fullName?: StringFilter<"Compte"> | string
    phone?: StringNullableFilter<"Compte"> | string | null
    country?: StringNullableFilter<"Compte"> | string | null
    Password?: StringFilter<"Compte"> | string
    role?: EnumRoleFilter<"Compte"> | $Enums.Role
    createdAt?: DateTimeFilter<"Compte"> | Date | string
    commandes?: CommandeListRelationFilter
  }, "id" | "email">

  export type CompteOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    Password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: CompteCountOrderByAggregateInput
    _avg?: CompteAvgOrderByAggregateInput
    _max?: CompteMaxOrderByAggregateInput
    _min?: CompteMinOrderByAggregateInput
    _sum?: CompteSumOrderByAggregateInput
  }

  export type CompteScalarWhereWithAggregatesInput = {
    AND?: CompteScalarWhereWithAggregatesInput | CompteScalarWhereWithAggregatesInput[]
    OR?: CompteScalarWhereWithAggregatesInput[]
    NOT?: CompteScalarWhereWithAggregatesInput | CompteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Compte"> | number
    fullName?: StringWithAggregatesFilter<"Compte"> | string
    email?: StringWithAggregatesFilter<"Compte"> | string
    phone?: StringNullableWithAggregatesFilter<"Compte"> | string | null
    country?: StringNullableWithAggregatesFilter<"Compte"> | string | null
    Password?: StringWithAggregatesFilter<"Compte"> | string
    role?: EnumRoleWithAggregatesFilter<"Compte"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Compte"> | Date | string
  }

  export type CommandeWhereInput = {
    AND?: CommandeWhereInput | CommandeWhereInput[]
    OR?: CommandeWhereInput[]
    NOT?: CommandeWhereInput | CommandeWhereInput[]
    id?: IntFilter<"Commande"> | number
    emballage?: StringFilter<"Commande"> | string
    adresse?: StringFilter<"Commande"> | string
    quantite?: IntFilter<"Commande"> | number
    productId?: IntFilter<"Commande"> | number
    compteId?: IntFilter<"Commande"> | number
    status?: BoolNullableFilter<"Commande"> | boolean | null
    Date?: DateTimeFilter<"Commande"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    compte?: XOR<CompteScalarRelationFilter, CompteWhereInput>
  }

  export type CommandeOrderByWithRelationInput = {
    id?: SortOrder
    emballage?: SortOrder
    adresse?: SortOrder
    quantite?: SortOrder
    productId?: SortOrder
    compteId?: SortOrder
    status?: SortOrderInput | SortOrder
    Date?: SortOrder
    product?: ProductOrderByWithRelationInput
    compte?: CompteOrderByWithRelationInput
  }

  export type CommandeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommandeWhereInput | CommandeWhereInput[]
    OR?: CommandeWhereInput[]
    NOT?: CommandeWhereInput | CommandeWhereInput[]
    emballage?: StringFilter<"Commande"> | string
    adresse?: StringFilter<"Commande"> | string
    quantite?: IntFilter<"Commande"> | number
    productId?: IntFilter<"Commande"> | number
    compteId?: IntFilter<"Commande"> | number
    status?: BoolNullableFilter<"Commande"> | boolean | null
    Date?: DateTimeFilter<"Commande"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    compte?: XOR<CompteScalarRelationFilter, CompteWhereInput>
  }, "id">

  export type CommandeOrderByWithAggregationInput = {
    id?: SortOrder
    emballage?: SortOrder
    adresse?: SortOrder
    quantite?: SortOrder
    productId?: SortOrder
    compteId?: SortOrder
    status?: SortOrderInput | SortOrder
    Date?: SortOrder
    _count?: CommandeCountOrderByAggregateInput
    _avg?: CommandeAvgOrderByAggregateInput
    _max?: CommandeMaxOrderByAggregateInput
    _min?: CommandeMinOrderByAggregateInput
    _sum?: CommandeSumOrderByAggregateInput
  }

  export type CommandeScalarWhereWithAggregatesInput = {
    AND?: CommandeScalarWhereWithAggregatesInput | CommandeScalarWhereWithAggregatesInput[]
    OR?: CommandeScalarWhereWithAggregatesInput[]
    NOT?: CommandeScalarWhereWithAggregatesInput | CommandeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Commande"> | number
    emballage?: StringWithAggregatesFilter<"Commande"> | string
    adresse?: StringWithAggregatesFilter<"Commande"> | string
    quantite?: IntWithAggregatesFilter<"Commande"> | number
    productId?: IntWithAggregatesFilter<"Commande"> | number
    compteId?: IntWithAggregatesFilter<"Commande"> | number
    status?: BoolNullableWithAggregatesFilter<"Commande"> | boolean | null
    Date?: DateTimeWithAggregatesFilter<"Commande"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    title?: StringFilter<"Product"> | string
    desc?: StringFilter<"Product"> | string
    prix?: FloatFilter<"Product"> | number
    emballage?: StringFilter<"Product"> | string
    farmId?: IntNullableFilter<"Product"> | number | null
    image?: StringFilter<"Product"> | string
    Date?: DateTimeFilter<"Product"> | Date | string
    commandes?: CommandeListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    prix?: SortOrder
    emballage?: SortOrder
    farmId?: SortOrderInput | SortOrder
    image?: SortOrder
    Date?: SortOrder
    commandes?: CommandeOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    title?: StringFilter<"Product"> | string
    desc?: StringFilter<"Product"> | string
    prix?: FloatFilter<"Product"> | number
    emballage?: StringFilter<"Product"> | string
    farmId?: IntNullableFilter<"Product"> | number | null
    image?: StringFilter<"Product"> | string
    Date?: DateTimeFilter<"Product"> | Date | string
    commandes?: CommandeListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    prix?: SortOrder
    emballage?: SortOrder
    farmId?: SortOrderInput | SortOrder
    image?: SortOrder
    Date?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    title?: StringWithAggregatesFilter<"Product"> | string
    desc?: StringWithAggregatesFilter<"Product"> | string
    prix?: FloatWithAggregatesFilter<"Product"> | number
    emballage?: StringWithAggregatesFilter<"Product"> | string
    farmId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    image?: StringWithAggregatesFilter<"Product"> | string
    Date?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type CompteCreateInput = {
    fullName: string
    email: string
    phone?: string | null
    country?: string | null
    Password: string
    role?: $Enums.Role
    createdAt?: Date | string
    commandes?: CommandeCreateNestedManyWithoutCompteInput
  }

  export type CompteUncheckedCreateInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    country?: string | null
    Password: string
    role?: $Enums.Role
    createdAt?: Date | string
    commandes?: CommandeUncheckedCreateNestedManyWithoutCompteInput
  }

  export type CompteUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUpdateManyWithoutCompteNestedInput
  }

  export type CompteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUncheckedUpdateManyWithoutCompteNestedInput
  }

  export type CompteCreateManyInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    country?: string | null
    Password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type CompteUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandeCreateInput = {
    emballage: string
    adresse: string
    quantite: number
    status?: boolean | null
    Date?: Date | string
    product: ProductCreateNestedOneWithoutCommandesInput
    compte: CompteCreateNestedOneWithoutCommandesInput
  }

  export type CommandeUncheckedCreateInput = {
    id?: number
    emballage: string
    adresse: string
    quantite: number
    productId: number
    compteId: number
    status?: boolean | null
    Date?: Date | string
  }

  export type CommandeUpdateInput = {
    emballage?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCommandesNestedInput
    compte?: CompteUpdateOneRequiredWithoutCommandesNestedInput
  }

  export type CommandeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    emballage?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    compteId?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandeCreateManyInput = {
    id?: number
    emballage: string
    adresse: string
    quantite: number
    productId: number
    compteId: number
    status?: boolean | null
    Date?: Date | string
  }

  export type CommandeUpdateManyMutationInput = {
    emballage?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    emballage?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    compteId?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    title?: string
    desc?: string
    prix?: number
    emballage?: string
    farmId?: number | null
    image?: string
    Date?: Date | string
    commandes?: CommandeCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    title?: string
    desc?: string
    prix?: number
    emballage?: string
    farmId?: number | null
    image?: string
    Date?: Date | string
    commandes?: CommandeUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    emballage?: StringFieldUpdateOperationsInput | string
    farmId?: NullableIntFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    emballage?: StringFieldUpdateOperationsInput | string
    farmId?: NullableIntFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    title?: string
    desc?: string
    prix?: number
    emballage?: string
    farmId?: number | null
    image?: string
    Date?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    emballage?: StringFieldUpdateOperationsInput | string
    farmId?: NullableIntFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    emballage?: StringFieldUpdateOperationsInput | string
    farmId?: NullableIntFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommandeListRelationFilter = {
    every?: CommandeWhereInput
    some?: CommandeWhereInput
    none?: CommandeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommandeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompteCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    Password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type CompteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompteMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    Password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type CompteMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    Password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type CompteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type CompteScalarRelationFilter = {
    is?: CompteWhereInput
    isNot?: CompteWhereInput
  }

  export type CommandeCountOrderByAggregateInput = {
    id?: SortOrder
    emballage?: SortOrder
    adresse?: SortOrder
    quantite?: SortOrder
    productId?: SortOrder
    compteId?: SortOrder
    status?: SortOrder
    Date?: SortOrder
  }

  export type CommandeAvgOrderByAggregateInput = {
    id?: SortOrder
    quantite?: SortOrder
    productId?: SortOrder
    compteId?: SortOrder
  }

  export type CommandeMaxOrderByAggregateInput = {
    id?: SortOrder
    emballage?: SortOrder
    adresse?: SortOrder
    quantite?: SortOrder
    productId?: SortOrder
    compteId?: SortOrder
    status?: SortOrder
    Date?: SortOrder
  }

  export type CommandeMinOrderByAggregateInput = {
    id?: SortOrder
    emballage?: SortOrder
    adresse?: SortOrder
    quantite?: SortOrder
    productId?: SortOrder
    compteId?: SortOrder
    status?: SortOrder
    Date?: SortOrder
  }

  export type CommandeSumOrderByAggregateInput = {
    id?: SortOrder
    quantite?: SortOrder
    productId?: SortOrder
    compteId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    prix?: SortOrder
    emballage?: SortOrder
    farmId?: SortOrder
    image?: SortOrder
    Date?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
    farmId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    prix?: SortOrder
    emballage?: SortOrder
    farmId?: SortOrder
    image?: SortOrder
    Date?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    prix?: SortOrder
    emballage?: SortOrder
    farmId?: SortOrder
    image?: SortOrder
    Date?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
    farmId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CommandeCreateNestedManyWithoutCompteInput = {
    create?: XOR<CommandeCreateWithoutCompteInput, CommandeUncheckedCreateWithoutCompteInput> | CommandeCreateWithoutCompteInput[] | CommandeUncheckedCreateWithoutCompteInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutCompteInput | CommandeCreateOrConnectWithoutCompteInput[]
    createMany?: CommandeCreateManyCompteInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type CommandeUncheckedCreateNestedManyWithoutCompteInput = {
    create?: XOR<CommandeCreateWithoutCompteInput, CommandeUncheckedCreateWithoutCompteInput> | CommandeCreateWithoutCompteInput[] | CommandeUncheckedCreateWithoutCompteInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutCompteInput | CommandeCreateOrConnectWithoutCompteInput[]
    createMany?: CommandeCreateManyCompteInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommandeUpdateManyWithoutCompteNestedInput = {
    create?: XOR<CommandeCreateWithoutCompteInput, CommandeUncheckedCreateWithoutCompteInput> | CommandeCreateWithoutCompteInput[] | CommandeUncheckedCreateWithoutCompteInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutCompteInput | CommandeCreateOrConnectWithoutCompteInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutCompteInput | CommandeUpsertWithWhereUniqueWithoutCompteInput[]
    createMany?: CommandeCreateManyCompteInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutCompteInput | CommandeUpdateWithWhereUniqueWithoutCompteInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutCompteInput | CommandeUpdateManyWithWhereWithoutCompteInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommandeUncheckedUpdateManyWithoutCompteNestedInput = {
    create?: XOR<CommandeCreateWithoutCompteInput, CommandeUncheckedCreateWithoutCompteInput> | CommandeCreateWithoutCompteInput[] | CommandeUncheckedCreateWithoutCompteInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutCompteInput | CommandeCreateOrConnectWithoutCompteInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutCompteInput | CommandeUpsertWithWhereUniqueWithoutCompteInput[]
    createMany?: CommandeCreateManyCompteInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutCompteInput | CommandeUpdateWithWhereUniqueWithoutCompteInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutCompteInput | CommandeUpdateManyWithWhereWithoutCompteInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutCommandesInput = {
    create?: XOR<ProductCreateWithoutCommandesInput, ProductUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCommandesInput
    connect?: ProductWhereUniqueInput
  }

  export type CompteCreateNestedOneWithoutCommandesInput = {
    create?: XOR<CompteCreateWithoutCommandesInput, CompteUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: CompteCreateOrConnectWithoutCommandesInput
    connect?: CompteWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ProductUpdateOneRequiredWithoutCommandesNestedInput = {
    create?: XOR<ProductCreateWithoutCommandesInput, ProductUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCommandesInput
    upsert?: ProductUpsertWithoutCommandesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCommandesInput, ProductUpdateWithoutCommandesInput>, ProductUncheckedUpdateWithoutCommandesInput>
  }

  export type CompteUpdateOneRequiredWithoutCommandesNestedInput = {
    create?: XOR<CompteCreateWithoutCommandesInput, CompteUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: CompteCreateOrConnectWithoutCommandesInput
    upsert?: CompteUpsertWithoutCommandesInput
    connect?: CompteWhereUniqueInput
    update?: XOR<XOR<CompteUpdateToOneWithWhereWithoutCommandesInput, CompteUpdateWithoutCommandesInput>, CompteUncheckedUpdateWithoutCommandesInput>
  }

  export type CommandeCreateNestedManyWithoutProductInput = {
    create?: XOR<CommandeCreateWithoutProductInput, CommandeUncheckedCreateWithoutProductInput> | CommandeCreateWithoutProductInput[] | CommandeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutProductInput | CommandeCreateOrConnectWithoutProductInput[]
    createMany?: CommandeCreateManyProductInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type CommandeUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CommandeCreateWithoutProductInput, CommandeUncheckedCreateWithoutProductInput> | CommandeCreateWithoutProductInput[] | CommandeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutProductInput | CommandeCreateOrConnectWithoutProductInput[]
    createMany?: CommandeCreateManyProductInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommandeUpdateManyWithoutProductNestedInput = {
    create?: XOR<CommandeCreateWithoutProductInput, CommandeUncheckedCreateWithoutProductInput> | CommandeCreateWithoutProductInput[] | CommandeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutProductInput | CommandeCreateOrConnectWithoutProductInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutProductInput | CommandeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CommandeCreateManyProductInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutProductInput | CommandeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutProductInput | CommandeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type CommandeUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CommandeCreateWithoutProductInput, CommandeUncheckedCreateWithoutProductInput> | CommandeCreateWithoutProductInput[] | CommandeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutProductInput | CommandeCreateOrConnectWithoutProductInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutProductInput | CommandeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CommandeCreateManyProductInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutProductInput | CommandeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutProductInput | CommandeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CommandeCreateWithoutCompteInput = {
    emballage: string
    adresse: string
    quantite: number
    status?: boolean | null
    Date?: Date | string
    product: ProductCreateNestedOneWithoutCommandesInput
  }

  export type CommandeUncheckedCreateWithoutCompteInput = {
    id?: number
    emballage: string
    adresse: string
    quantite: number
    productId: number
    status?: boolean | null
    Date?: Date | string
  }

  export type CommandeCreateOrConnectWithoutCompteInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutCompteInput, CommandeUncheckedCreateWithoutCompteInput>
  }

  export type CommandeCreateManyCompteInputEnvelope = {
    data: CommandeCreateManyCompteInput | CommandeCreateManyCompteInput[]
    skipDuplicates?: boolean
  }

  export type CommandeUpsertWithWhereUniqueWithoutCompteInput = {
    where: CommandeWhereUniqueInput
    update: XOR<CommandeUpdateWithoutCompteInput, CommandeUncheckedUpdateWithoutCompteInput>
    create: XOR<CommandeCreateWithoutCompteInput, CommandeUncheckedCreateWithoutCompteInput>
  }

  export type CommandeUpdateWithWhereUniqueWithoutCompteInput = {
    where: CommandeWhereUniqueInput
    data: XOR<CommandeUpdateWithoutCompteInput, CommandeUncheckedUpdateWithoutCompteInput>
  }

  export type CommandeUpdateManyWithWhereWithoutCompteInput = {
    where: CommandeScalarWhereInput
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyWithoutCompteInput>
  }

  export type CommandeScalarWhereInput = {
    AND?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
    OR?: CommandeScalarWhereInput[]
    NOT?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
    id?: IntFilter<"Commande"> | number
    emballage?: StringFilter<"Commande"> | string
    adresse?: StringFilter<"Commande"> | string
    quantite?: IntFilter<"Commande"> | number
    productId?: IntFilter<"Commande"> | number
    compteId?: IntFilter<"Commande"> | number
    status?: BoolNullableFilter<"Commande"> | boolean | null
    Date?: DateTimeFilter<"Commande"> | Date | string
  }

  export type ProductCreateWithoutCommandesInput = {
    title?: string
    desc?: string
    prix?: number
    emballage?: string
    farmId?: number | null
    image?: string
    Date?: Date | string
  }

  export type ProductUncheckedCreateWithoutCommandesInput = {
    id?: number
    title?: string
    desc?: string
    prix?: number
    emballage?: string
    farmId?: number | null
    image?: string
    Date?: Date | string
  }

  export type ProductCreateOrConnectWithoutCommandesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCommandesInput, ProductUncheckedCreateWithoutCommandesInput>
  }

  export type CompteCreateWithoutCommandesInput = {
    fullName: string
    email: string
    phone?: string | null
    country?: string | null
    Password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type CompteUncheckedCreateWithoutCommandesInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    country?: string | null
    Password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type CompteCreateOrConnectWithoutCommandesInput = {
    where: CompteWhereUniqueInput
    create: XOR<CompteCreateWithoutCommandesInput, CompteUncheckedCreateWithoutCommandesInput>
  }

  export type ProductUpsertWithoutCommandesInput = {
    update: XOR<ProductUpdateWithoutCommandesInput, ProductUncheckedUpdateWithoutCommandesInput>
    create: XOR<ProductCreateWithoutCommandesInput, ProductUncheckedCreateWithoutCommandesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCommandesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCommandesInput, ProductUncheckedUpdateWithoutCommandesInput>
  }

  export type ProductUpdateWithoutCommandesInput = {
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    emballage?: StringFieldUpdateOperationsInput | string
    farmId?: NullableIntFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutCommandesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    emballage?: StringFieldUpdateOperationsInput | string
    farmId?: NullableIntFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompteUpsertWithoutCommandesInput = {
    update: XOR<CompteUpdateWithoutCommandesInput, CompteUncheckedUpdateWithoutCommandesInput>
    create: XOR<CompteCreateWithoutCommandesInput, CompteUncheckedCreateWithoutCommandesInput>
    where?: CompteWhereInput
  }

  export type CompteUpdateToOneWithWhereWithoutCommandesInput = {
    where?: CompteWhereInput
    data: XOR<CompteUpdateWithoutCommandesInput, CompteUncheckedUpdateWithoutCommandesInput>
  }

  export type CompteUpdateWithoutCommandesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompteUncheckedUpdateWithoutCommandesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandeCreateWithoutProductInput = {
    emballage: string
    adresse: string
    quantite: number
    status?: boolean | null
    Date?: Date | string
    compte: CompteCreateNestedOneWithoutCommandesInput
  }

  export type CommandeUncheckedCreateWithoutProductInput = {
    id?: number
    emballage: string
    adresse: string
    quantite: number
    compteId: number
    status?: boolean | null
    Date?: Date | string
  }

  export type CommandeCreateOrConnectWithoutProductInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutProductInput, CommandeUncheckedCreateWithoutProductInput>
  }

  export type CommandeCreateManyProductInputEnvelope = {
    data: CommandeCreateManyProductInput | CommandeCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CommandeUpsertWithWhereUniqueWithoutProductInput = {
    where: CommandeWhereUniqueInput
    update: XOR<CommandeUpdateWithoutProductInput, CommandeUncheckedUpdateWithoutProductInput>
    create: XOR<CommandeCreateWithoutProductInput, CommandeUncheckedCreateWithoutProductInput>
  }

  export type CommandeUpdateWithWhereUniqueWithoutProductInput = {
    where: CommandeWhereUniqueInput
    data: XOR<CommandeUpdateWithoutProductInput, CommandeUncheckedUpdateWithoutProductInput>
  }

  export type CommandeUpdateManyWithWhereWithoutProductInput = {
    where: CommandeScalarWhereInput
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyWithoutProductInput>
  }

  export type CommandeCreateManyCompteInput = {
    id?: number
    emballage: string
    adresse: string
    quantite: number
    productId: number
    status?: boolean | null
    Date?: Date | string
  }

  export type CommandeUpdateWithoutCompteInput = {
    emballage?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCommandesNestedInput
  }

  export type CommandeUncheckedUpdateWithoutCompteInput = {
    id?: IntFieldUpdateOperationsInput | number
    emballage?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandeUncheckedUpdateManyWithoutCompteInput = {
    id?: IntFieldUpdateOperationsInput | number
    emballage?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandeCreateManyProductInput = {
    id?: number
    emballage: string
    adresse: string
    quantite: number
    compteId: number
    status?: boolean | null
    Date?: Date | string
  }

  export type CommandeUpdateWithoutProductInput = {
    emballage?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    compte?: CompteUpdateOneRequiredWithoutCommandesNestedInput
  }

  export type CommandeUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    emballage?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    compteId?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandeUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    emballage?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    compteId?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}