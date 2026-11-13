---
uid: api.26674d7fd5a8351fdb2bec906f1f033bde1c0abde27150c2cc44bae0c6ea9682
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.Assets.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: 233db833180bc8f729add476752d81f3931f1321a4de8473ef4ed82377934b55
title: "AcquireArtifact"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Acquires one verified immutable artifact output for an explicit lifetime.

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Stable artifact output name.

**Returns:** A lease over verified artifact metadata and bytes.
