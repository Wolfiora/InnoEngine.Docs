---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.aa10761f3892d4eb539adf23d13c9e1c673495f6879f04a4be185682d5261914
symbol: engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.IEditorShaderArtifactValidator.Request(System.Guid,System.UInt64,Inno.Rendering.Assets.RenderShaderArtifact)
title: IEditorShaderArtifactValidator.Request
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: source-clr
sourceFingerprint: 680a01c639a18afe3658c4f7424a60c63d656066dd9b2f56777ef0e1d58ad270
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `documentID`:** Stable Editor document identity.

**Parameter `revision`:** Exact document revision that produced the artifact.

**Parameter `artifact`:** Complete immutable candidate compiled for the active device.

## Returns

Current detached validation state.
