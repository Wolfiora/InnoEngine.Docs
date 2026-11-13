---
title: Find extension types without retaining old generations
description: Query the current type catalog, persist stable references and scope
  access to live CLR declarations.
uid: manual.extensions.find-types
kind: how-to
owners:
  - Inno.Extensibility.Types
contracts:
  - project.inno-extensibility-types#type-identity-and-snapshot-contract
exampleMode: host
exampleProjects:
  - Inno.Extensibility.Types
---
# Find extension types without retaining old generations

Use the host's `TypeCatalog` to find concrete implementations and obtain `TypeRef` values. Store stable references when data must survive a reload; resolve them only inside the generation whose code you are about to use.

The following is host CLR code. `TypeRef` is not a gameplay script export, and a public CLR type does not imply a script-projected extension API.

## Query the owning catalog

This helper borrows an initialized catalog and returns neutral references. The host controls the safe point and owns the catalog for the complete call.

```csharp
using System.Collections.Generic;
using Inno.Extensibility.Types;

public static class TypeDiscovery
{
    public static IReadOnlyList<TypeRef> FindImplementations<T>(TypeCatalog types)
    {
        return types.GetTypesImplementing<T>();
    }
}
```

Use `GetSubTypesOf<T>` for assignable concrete types, `GetTypesImplementing<TInterface>` for interface implementations, or `GetTypesWithAttribute<TAttribute>` for concrete declarations with the selected attribute. Results follow stable catalog ordering and exclude abstract/interface declarations.

Do not scan all loaded process assemblies to supplement a missing result. A declaration must belong to the selected module closure and its explicit metadata source. Loader errors reject an incomplete candidate rather than allowing partial discovery.

## Keep logical identity distinct from a live type

`TypeRef.stableId` identifies the logical type. Equality and hashing use that value. `runtimeId` is a nonpersistent resolution hint for a particular CLR declaration; resolution verifies that any runtime hit still matches the stable identity and otherwise uses stable lookup.

The public constructor accepts a Guid and creates an unresolved reference. Empty Guid/default references are invalid. `IsValid(catalog)` checks current resolvability; it does not pin that result indefinitely. `TryResolve` reports absence, while `Resolve` throws for an unavailable reference.

The reference itself contains no `Type`, assembly, delegate or load-context object. A resolved `Type`, constructed instance or captured delegate does retain its generation under normal .NET rules. Do not store those results in long-lived History, workspace or plugin-global caches.

## Stabilize a multi-step operation

When a synchronous operation needs several queries or mutates an owner captured from the current generation, first allow the host to reconcile pending catalog changes, then hold `AcquireOperation` through all access, notifications and compensation. Perform this sequence at the host's control-thread safe point; it is not permission for unrelated threads to publish concurrently.

```csharp
using System;
using Inno.Extensibility.Types;

public static class TypeNames
{
    public static string ReadCurrentTypeName(TypeCatalog types, TypeRef reference)
    {
        _ = types.current;
        using IDisposable operation = types.AcquireOperation("read extension type name");
        return reference.Resolve(types).FullName
            ?? throw new InvalidOperationException("The type has no full name.");
    }
}
```

The operation scope defers automatic publication and uses the shared generation gate. It does not itself refresh the catalog and does not authorize asynchronous Build/Export work. Those consumers use the stricter read lease described in [generation admission](../../architecture/generation-publication.md).

For a consistent set of queries, use one `TypeCacheSnapshot` inside the protected operation. Its version and references are immutable, but the snapshot strongly retains declarations and source metadata. Release it before the generation must unload.

## Assign a durable semantic type identity

Without an explicit identity, ordinary host/plugin declarations derive deterministic UUIDv5 identity from assembly simple name and full type name. Compiler-supplied source identities can override that convention for scripts. A type-level `StableTypeId` takes precedence over compiler mappings.

```csharp
using Inno.Extensibility.Types;

[StableTypeId("c5db9123-9768-4e34-a346-22981ee4b4da")]
public sealed class ToolConfiguration
{
}
```

Choose one persistent identity for one semantic declaration. Invalid or duplicate identifiers reject the candidate. The catalog does not maintain a former-name alias table or guess compatibility with old persisted data.

New CLR declarations receive new runtime IDs, including replacement types in a new collectible context. IDs allocated to failed candidates are not recycled. Persist the stable reference rather than a bare runtime integer.

See [the type reference](../../architecture/projects/inno-extensibility-types.md) for exact members, and [extension registries](../../extending/type-registries.md) to turn discovered types into owned instances.
