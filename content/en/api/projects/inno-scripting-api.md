---
title: Inno.Scripting.Api
description: Explicit script exports, logical namespaces and domain-owned attachable-type metadata.
uid: project.inno-scripting-api
kind: project
owners: [Inno.Scripting.Api]
---
# Inno.Scripting.Api

This small declaration assembly defines which real engine types are exposed to scripts and which domain base types describe attachable script categories. It has no Roslyn dependency and does not own compilation, module loading, source directories or scene migration.

Start with [using the script API](../../manual/scripting/use-script-api.md). Engine extension authors use [declaring a script export](../../extending/script-exports.md).

## Explicit export contract

A feature declares its selected types and logical namespace mappings in one `Properties/ScriptingApi.cs`. It may export a type owned by a dependency; runtime references still use that type's actual owning assembly. This is not permission to export every public type in an assembly.

`ScriptingApiExportAttribute` selects a type and scope. Its renamed-type overload changes the facade name and associated documentation identities, not the runtime CLR identity. Open generic types cannot be renamed because ordinary C# using aliases cannot express that mapping. The implementation namespace must have one applicable mapping.

`ScriptingApiNamespaceAttribute` maps a logical namespace to an implementation namespace. Several implementation namespaces can contribute to one logical namespace. The mapping is a source-language contract; it does not create a second runtime type system.

## Scope and member visibility

| Scope | Available to | Player behavior |
| --- | --- | --- |
| `Runtime` | Game and Editor scripts | Selected runtime contracts remain available. |
| `Editor` | Editor scripts only | Not a Player API. |
| `Authoring` | Authoring compilation and IDE projects | Compile-time annotation uses, derived annotation declarations and their imports are erased before binding Player references. |

Authoring scope is for annotation metadata, not runtime service access. Using an authoring-only annotation type as an ordinary Player object is an error. Normal serialization declarations retain their own persistence contract and are not erased merely because they are attributes.

The compiler retains selected public/protected signatures only when their non-framework types belong to the exported contract. A property returning an unexported subsystem does not silently expand the script surface. `ScriptingApiIgnoreAttribute` excludes selected declarations from script access; full implementation metadata used during generated emission does not reopen user access.

## Domain-owned attachable categories

A domain places `ScriptingAttachableTypeAttribute` on a base type that scripts may derive from and that needs a stable source-owned type identity. Its nonempty `kind` is a domain-defined manifest category. The compiler follows actual base-type metadata; it does not maintain a Scene/Component/System name switch.

The catalog reads this metadata from the real domain base type, independently of whether trimmed script references retain the host-only attribute. The attribute does not migrate instances, retain a `Type` or hold a collectible load context alive. A new domain category is declared at that domain boundary.

## Namespace and identity boundaries

Each script file declares its own ordinary logical namespace imports. Compilation-wide imports, implicit imports and project or plugin metadata injecting imports are not supported. One file's imports do not grant another file access.

IDE facades expose logical names; actual compiled scripts refer to original engine CLR types. See [script compilation and projection](../../architecture/script-compilation.md) for the two paths and their shared API boundary.

## API reference

[Browse exact types and members](../types/scripting/inno-scripting-api/index.md).
