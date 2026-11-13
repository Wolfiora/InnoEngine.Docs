---
uid: api.0b1726a27ac468a155df2c71a9ebb64cfa3f65060473c323bf23b129e6cea428
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.GeometryAssetRuntime.GetGeometryData(Inno.Rendering.Assets.GeometryAsset)"
source: xml
reviewed: 9f30a73aa6ab88314e6e4638c4f7beeb1c76f63a2fdf4d6e7cf87cd84b469553
title: "GetGeometryData"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Decodes the current committed mesh payload.

**Parameter `geometry`:** Imported geometry asset.

**Returns:** Normalized vertices, triangle indices and submeshes.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the payload is missing or corrupt.
