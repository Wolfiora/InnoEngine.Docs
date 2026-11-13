---
title: Use materials and compiled rendering assets
description: Resolve explicit shader contracts and consume retained artifacts
  without serializing device state.
uid: manual.rendering.materials
kind: how-to
owners:
  - Inno.Rendering.Assets
contracts:
  - project.inno-rendering-assets
---
# Use materials and compiled rendering assets

Rendering assets preserve neutral intent: shader declarations, material values and references, geometry/texture data and pipeline settings. Their GPU realization belongs to the active Rendering Runtime and device generation.

## Select the contract you need

A material resolves a technique using an explicit `ShaderContractId`, `ShaderPassRoleId` and actual device capabilities. Choose identities owned by your rendering domain. The resolver does not assume sprite, PBR or a fixed set of pass tags.

A pipeline asset stores its extension Stable Type ID and neutral configuration. It does not serialize a live Pipeline instance or a GPU handle. Preserve Missing state and stable identities when an extension becomes unavailable.

## Update a complete shader definition

Read a definition as an independent editable copy, then submit the complete definition through ShaderAsset.SetDefinition. Validation captures nested state before replacing the previous value. A failed update leaves the old state unchanged; mutating a returned copy is not a hidden in-place update of the asset.

Material defaults and texture Asset references belong to the runtime asset layer. Compiled shader binding facts belong to neutral Rendering Core. Keep authoring source/import settings separate from these deployed runtime contracts.

## Read an artifact through its owner

RenderTargetArtifactPath yields a logical content location, not a physical cache path. Read through an ArtifactLease or verified content store and retain its owner for the complete operation. Do not recover an unavailable artifact by probing an authoring folder at runtime.

The authoring pipeline freezes graph/source dependencies and compiles a candidate. Failure retains last-good output for the same logical asset; successful publication provides the runtime artifact. GPU resource creation and retirement remain a later, device-owned step.

See [artifact byte reading](../assets/read-artifacts.md), [render-frame ownership](../../architecture/render-frame.md) and [the exact asset API](../../architecture/projects/inno-rendering-assets.md) for leases, serialization and technique-selection results.
