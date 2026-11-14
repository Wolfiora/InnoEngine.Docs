---
uid: api.bf7e9a3e4749c62840ea9b79814b96ef45a0642d08834346378952742de38f33
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.Move(Inno.Assets.AssetPath,Inno.Assets.AssetPath)"
source: xml
reviewed: b7c2228ecde663433d9d376ec719d06580baf2df56af34908d47a97479ce1030
title: "AssetPipeline.Move"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Moves a source asset while preserving its persistent identity and generated metadata.

**Parameter `source`:** Existing isolated source path.

**Parameter `target`:** New isolated source path.

**Exception `T:System.IO.FileNotFoundException`:** Thrown when the source does not exist.

**Exception `T:System.IO.IOException`:** Thrown when the target source or metadata already exists.
