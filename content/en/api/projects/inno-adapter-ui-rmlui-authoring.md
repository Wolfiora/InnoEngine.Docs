---
title: Inno.Adapter.UI.RmlUi.Authoring
description: RML source analysis, controlled RCSS expansion and font dependency extraction without native layout.
uid: project.inno-adapter-ui-rmlui-authoring
kind: project
owners:
  - Inno.Adapter.UI.RmlUi.Authoring
---
# Inno.Adapter.UI.RmlUi.Authoring

The authoring adapter supplies the `.rml` importer and RML language frontend. It analyzes source without constructing a native UI session. Start with [authoring an RmlUi document](../../manual/ui/author-rml.md).

## Source analysis contract

The importer selects RML and the RmlUi implementation explicitly, then delegates to the neutral UI import pipeline. The frontend expands linked `.rcss` files and recursive imports through the provided source dependency reader. Missing reader capability, cycles, rooted paths and root escapes fail visibly.

Font declarations require a usable family and source. The frontend extracts font dependencies, rebases their asset paths, creates private family names and removes face declarations from canonical runtime text. Family rewriting is scoped to the document's source identity; the runtime adds content-version isolation later.

Weight accepts normal, bold or integers from 100 through 1000. Imported font registration currently uses face zero. This pipeline is not a complete RML/CSS parser: source preflight and dependency extraction do not certify full grammar or every upstream feature. Actual backend loading is a separate boundary.

## Ownership

The type-generation registry owns frontend instances. Results contain detached neutral text, diagnostics and font declarations. The reader represents declared source access, not authorization for arbitrary filesystem or network loading.

The [neutral importer](inno-ui-assets.md) resolves asset dependencies; the [runtime backend](inno-adapter-ui-rmlui.md) owns native layout and document state.

## Reference

[Browse types and exact member contracts](../types/rmlui-authoring/index.md).
