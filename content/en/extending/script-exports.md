---
title: Declare a script export
description: Expose a deliberate feature-owned type surface without a central
  module list or runtime identity alias.
uid: extending.script-exports
kind: how-to
owners:
  - Inno.Scripting.Api
contracts:
  - project.inno-scripting-api
exampleMode: host
exampleProjects:
  - Inno.Scripting.Api
---
# Declare a script export

An engine feature owns the decision to expose its capability to scripts. Declare a small, explicit type surface in that feature's `Properties/ScriptingApi.cs`; do not add a central assembly that references every module.

## Map a namespace and select a type

This complete host-source example defines one value type and exports it under a logical namespace:

```csharp
using Inno.Scripting.Api;

[assembly: ScriptingApiNamespace(
    "Example.Values",
    "Example.Implementation",
    ScriptingApiScope.Runtime)]
[assembly: ScriptingApiExport(typeof(Example.Implementation.Amount), ScriptingApiScope.Runtime)]

namespace Example.Implementation
{
    public readonly record struct Amount(float value);
}
```

In a real feature, keep the existing type in its own source file and the assembly declarations in the single manifest. Exporting a dependency's type is permitted when the feature owns that public capability; the runtime reference still belongs to the type's defining assembly.

Select `Runtime`, `Editor` or `Authoring` deliberately. Mapping a namespace alone grants no API access. Review every exposed member's signature: non-framework types outside the selected exports keep that member out of the trimmed contract.

## Give a facade type a different name

The export attribute's string-name overload can select a script-facing name for a nongeneric type. The IDE facade, logical references and XML documentation identity follow that name; emitted runtime references retain the original CLR type. Open generic renaming is rejected, not implemented through a second wrapper type.

Keep the alias declaration with the feature that owns the export. For example, the Editor ImGui feature owns its `ImGuiIcon` and `NativeImGui` exports; a panel consuming them does not maintain a second alias manifest.

## Declare attachable metadata at the domain

If scripts can derive from a domain base type and the host must assign source-owned type identities, apply `ScriptingAttachableTypeAttribute` with a meaningful nonempty category to that base. The compiler follows the actual inheritance chain and domain metadata. Do not add a special case to a central Scene/Component/System list.

The attribute does not implement instance migration or keep a collectible `Type` alive. Generation ownership and Missing recovery remain the domain's responsibility.

## Verify both source paths

Validate the logical IDE facade and runtime compilation path against the same selected exports and SDK inputs. Preserve exact overloads, constraints and excluded members; a successful host compilation cannot establish script visibility. Use [script example validation](../contributing/example-validation.md) and the compiler's regression owner for changes to projection behavior.
