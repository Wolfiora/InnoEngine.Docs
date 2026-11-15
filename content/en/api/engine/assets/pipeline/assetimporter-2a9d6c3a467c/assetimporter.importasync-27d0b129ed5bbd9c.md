---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.27d0b129ed5bbd9c8917fc7bf06650d0177ba116693a6b9a21f7e0b56080026e
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetImporter`1.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{`0},System.Threading.CancellationToken)
title: AssetImporter<TAsset>.ImportAsync
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: c0b2d6f3e50106a16a133de34483f2f6cb5058ac3053611866f10e00eea71986

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Imports one source into a managed asset and named artifact outputs.

## Parameters

**Parameter `context`:** The import transaction context.

**Parameter `output`:** The candidate output writer.

**Parameter `cancellationToken`:** Cancellation for the import.

## Returns

An operation that completes when the candidate has been fully staged.
