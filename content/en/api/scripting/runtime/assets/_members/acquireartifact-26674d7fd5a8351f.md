---
uid: api.26674d7fd5a8351fdb2bec906f1f033bde1c0abde27150c2cc44bae0c6ea9682
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.Assets.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: 2a9ddc04fb921a4c39ab2884b3a742691da7dddcc28469cbdd23d86fbb8975f7
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
