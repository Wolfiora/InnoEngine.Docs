---
uid: api.39c9f1aeaac0541c040327082663c93c066cde7ea3f26d06d5be7ad878077f20
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetSampleImportProgress.#ctor(System.Int64,System.Single,System.String,System.Boolean)"
source: xml
reviewed: 83c44b93fa332d7f7b405865d25c38d74371257dd746e580953ce4994141babf
title: "AssetSampleImportProgress.Constructor"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Contains one atomically captured sample import status.

## Parameters

**Parameter `operationId`:** The import identity within its owner.

**Parameter `fraction`:** The completed validation and publication fraction.

**Parameter `status`:** The current stage description.

**Parameter `cancellationRequested`:** Whether cancellation is draining owned work.
