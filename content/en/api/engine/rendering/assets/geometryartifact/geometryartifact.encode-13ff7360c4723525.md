---
uid: api.13ff7360c472352509f4cb22420c8d4f7c2a72021fbddfea88a759263235e229
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.GeometryArtifact.Encode(Inno.Rendering.Assets.GeometryData)"
source: xml
reviewed: 5860590d657ef916e6cf7613b89d6269334e53911644599f0342658940429204
title: "GeometryArtifact.Encode"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Encodes normalized geometry into the immutable runtime artifact layout.

**Parameter `data`:** The normalized vertices, indices, and sections to encode.

**Returns:** A complete geometry artifact owned by the caller.

**Exception `T:System.ArgumentNullException`:** Thrown when `data` is null.
