---
uid: api.abe378cf2026248fe5334e3d045ba088780d3d70c65c318236291de03266a693
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetDraftDocuments\u00601.Read(System.Guid)"
source: xml
reviewed: 15f8837a74fafc63f18d26389d53652d6ccd7344cf3c0408b4b9e3281179dbbc
title: "AssetDraftDocuments\u003CTAsset\u003E.Read"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Reads a detached current-generation value; callers must never mutate its referenced canonical assets.

## Parameters

**Parameter `assetId`:** Open asset identity.

## Returns

A detached editable asset whose changes have not been published.
