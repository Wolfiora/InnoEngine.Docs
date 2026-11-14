---
uid: api.0b1726a27ac468a155df2c71a9ebb64cfa3f65060473c323bf23b129e6cea428
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.GeometryAssetRuntime.GetGeometryData(Inno.Rendering.Assets.GeometryAsset)"
source: xml
reviewed: e4ec2a30ee665c377d30814c3c7b91ccdd1c692b76790d2a07cf56e635651504
title: "GeometryAssetRuntime.GetGeometryData"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Decodes the current committed mesh payload.

**Parameter `geometry`:** Imported geometry asset.

**Returns:** Normalized vertices, triangle indices and submeshes.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the payload is missing or corrupt.
