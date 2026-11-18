---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.aa10761f3892d4eb539adf23d13c9e1c673495f6879f04a4be185682d5261914
symbol: engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.IEditorShaderArtifactValidator.Request(System.Guid,System.UInt64,Inno.Rendering.Assets.RenderShaderArtifact)
title: IEditorShaderArtifactValidator.Request
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: source-clr
sourceFingerprint: 5f8625001ddea83e644b0c8d6ded0c383727316aa9fb2dade97f7f276b5d949d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `documentId`:** Stable Editor document identity.

**Parameter `revision`:** Exact document revision that produced the artifact.

**Parameter `artifact`:** Complete immutable candidate compiled for the active device.

## Returns

Current detached validation state.
