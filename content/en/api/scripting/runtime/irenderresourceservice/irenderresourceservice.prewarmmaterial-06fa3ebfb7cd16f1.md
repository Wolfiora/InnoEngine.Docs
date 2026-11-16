---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.06fa3ebfb7cd16f171f364faa6da81a54244cf1be694790addd19cc7bfc80509
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.PrewarmMaterial(InnoEngine.Rendering.MaterialAsset)
title: IRenderResourceService.PrewarmMaterial
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: b9e79104f25461befb9b33a8fe00fdcc44ca76849bbdaad6744f465650c2298a
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `material`:** Material whose selected static variant should be prepared.

## Returns

The exact target artifact state for this material variant: Ready includes a usable last-good artifact, Pending means compilation is ongoing, and Failed or Unavailable means no artifact can currently be used.

## Exceptions

**Exception `T:System.ArgumentException`:** The material has no shader or declares an invalid static variant.

**Exception `T:System.InvalidOperationException`:** No target artifact provider is available for this runtime.
