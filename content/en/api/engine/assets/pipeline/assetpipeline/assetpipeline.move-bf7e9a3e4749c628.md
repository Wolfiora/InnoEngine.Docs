---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bf7e9a3e4749c62840ea9b79814b96ef45a0642d08834346378952742de38f33
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.Move(Inno.Assets.AssetPath,Inno.Assets.AssetPath)
title: AssetPipeline.Move
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: e5ec81bf51bd949525a6480988d93f31013b5051471d124cd9ead36175a8acac
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `source`:** Existing isolated source path.

**Parameter `target`:** New isolated source path.

## Exceptions

**Exception `T:System.IO.FileNotFoundException`:** Thrown when the source does not exist.

**Exception `T:System.IO.IOException`:** Thrown when the target source or metadata already exists.
