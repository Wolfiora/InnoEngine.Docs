---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c05c7c99142c8ad6fa517b283cab76e1e8f3cb7431e49f19040883be00a315e2
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetImportContext.AcquireArtifact(System.Guid,System.String)
title: AssetImportContext.AcquireArtifact
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
reviewed: d9b758e7e4e1b4b87d01c1e6000f48469c5992761ada70cffdd2fc3383d0b21e
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Acquires an immutable dependency output and records its invalidation dependency automatically.

## Parameters

**Parameter `assetId`:** Persistent dependency identity.

**Parameter `outputName`:** Stable named output protocol.

## Returns

A caller-owned lease that must be disposed after reading.
