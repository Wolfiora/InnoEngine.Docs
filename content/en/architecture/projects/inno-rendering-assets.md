---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-rendering-assets
symbol: project:Inno.Rendering.Assets
title: Inno.Rendering.Assets
kind: project
owners:
- Inno.Rendering.Assets
sourceFingerprint: 61a280787ec83418e5155019016dae24cdeded1ff986e51c2eff536c48258a1f
contracts: []
outdatedFor: 71a00c075c3b2ea6cd5a9ea72f1c40c6755e0a15e7741b56739c87cae24c134f

# Authoring metadata. Edit these fields and the explanation below.
source: InnoEngine contributors
description:
- Persistent neutral shader, material, texture, geometry and pipeline assets.
outdated: false
exampleMode: host
exampleProjects:
- Inno.Rendering.Assets
---
# Inno.Rendering.Assets

Persistent neutral shader, material, texture, geometry and pipeline assets.

Start with [rendering tasks](../../manual/rendering/index.md) and [frame ownership](../render-frame.md).

## Persistent data boundary

This assembly owns runtime asset protocols, open IDs, serialization and target artifacts for Shader, Material, Texture, Geometry and Pipeline data. It depends on neutral Rendering, Assets, References and required Foundation services, not runtime composition, shader graph tooling or AssetPipeline. It can participate in a static Player closure.

ShaderDefinition is an editable declaration. ShaderAsset.SetDefinition captures and validates the complete nested state before replacing it; failure preserves the old definition and getters return independent copies. Material defaults and texture Asset references belong here. Pure compiled binding-interface facts belong to Rendering Core.

Material technique selection uses open ShaderContractID, ShaderPassRoleID and actual device capabilities. The resolver has no built-in sprite/PBR or fixed-pass-tag worldview. Pipeline assets save an extension's Stable Type ID and neutral settings rather than a live provider.

## Content and resource ownership

RenderTargetArtifactPath returns a logical location. Read an artifact through ArtifactLease.OpenRead or the owning content store while retaining its lease/owner. Persistent models expose no physical cache path and save no device handles. GPU allocation, caching and retirement belong to Rendering.Runtime.

Authoring import, graph editing and target compilation live in the separate authoring assembly. Persisted types retain their Stable Type IDs; the logical runtime script namespace remains InnoEngine.Rendering. A public host member is still subject to the actual script export manifest.

## Host usage

Supply live, explicitly owned dependencies as described above. These examples compile against the host contract; they do not initialize a complete product or verify a device.

```csharp
using Inno.Rendering;
using Inno.Rendering.Assets;

static MaterialPassResolution? SelectPass(
    MaterialAsset material,
    GraphicsCapabilities capabilities
) {
    return MaterialPassResolver.Resolve(material, new ShaderContractID("sample.surface"),
        new ShaderPassRoleID("sample.draw"), capabilities);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Inno.Rendering.Assets.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse types and members](../../api/engine/rendering/assets/index.md).

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../../api/scripting/index.md)
