---
uid: api.27d0b129ed5bbd9c8917fc7bf06650d0177ba116693a6b9a21f7e0b56080026e
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetImporter\u00601.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{\u00600},System.Threading.CancellationToken)"
source: xml
reviewed: 523669121c446ccc8eb8bd7b8e5a328f16c7e6b5d2cf4851a8b3448f4dc95a3a
title: "ImportAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Imports one source into a managed asset and named artifact outputs.

**Parameter `context`:** The import transaction context.

**Parameter `output`:** The candidate output writer.

**Parameter `cancellationToken`:** Cancellation for the import.

**Returns:** An operation that completes when the candidate has been fully staged.
