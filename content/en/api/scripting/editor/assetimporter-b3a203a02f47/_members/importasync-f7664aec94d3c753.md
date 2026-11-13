---
uid: api.f7664aec94d3c753d3708827aaebe5b7ab82f4beba57fa0d2e0d501e16edb28f
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetImporter\u00601.ImportAsync(InnoEditor.Assets.AssetImportContext,InnoEditor.Assets.AssetImportWriter{\u00600},System.Threading.CancellationToken)"
source: xml
reviewed: 823c4f5dfdadde9884778130365fde3aa0a0838eee6ed97196d65217f2de6d01
title: "ImportAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Imports one source into a managed asset and named artifact outputs.

**Parameter `context`:** The import transaction context.

**Parameter `output`:** The candidate output writer.

**Parameter `cancellationToken`:** Cancellation for the import.

**Returns:** An operation that completes when the candidate has been fully staged.
