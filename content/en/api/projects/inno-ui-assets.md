---
title: Inno.UI.Assets
description: Neutral UI import settings, language frontends, dependency analysis and runtime payload production.
uid: project.inno-ui-assets
kind: project
owners:
  - Inno.UI.Assets
---
# Inno.UI.Assets

This project imports neutral `.iuidocument` sources through an explicitly selected language frontend. It defines analysis and dependency contracts while leaving RML syntax to the RmlUi authoring adapter. See [authoring a document](../../manual/ui/author-rml.md) for the current concrete language path.

## Import and generation contract

`UiDocumentImportSettings` requires nonempty `languageId` and `implementationId`. Empty defaults are not an automatic selection. The importer reads strict UTF-8, analyzes the source through the active frontend registry, resolves declared font assets and produces an implementation-qualified runtime payload.

Failed analysis produces diagnostics and stops import. Missing fonts and fonts without a usable face fail explicitly. Current imported registrations select face zero. Declared font artifacts become asset dependencies, and the payload retains neutral source and font descriptions rather than live frontend or native objects.

The registry discovers `IUiDocumentFrontend` implementations from the shared type catalog, owns their extension lifetime, and acquires a type operation while analyzing. Provider retirement cannot race an active analysis. Detached analysis results must not retain provider objects or generation-bound delegates.

## Frontend boundaries

The source snapshot exposes an explicit reader for declared source dependencies. A frontend must use that boundary rather than making hidden network requests or independently reading mutable filesystem paths. Duplicate language providers and unavailable languages are visible selection errors.

An analysis result is successful only when canonical text exists and no diagnostics remain. This is an authoring contract, not proof that a native backend, GPU renderer or deployment environment is available.

## Related implementation

The [RmlUi frontend](inno-adapter-ui-rmlui-authoring.md) handles `.rml` and controlled RCSS expansion. The [UI runtime](inno-ui-runtime.md) owns document font artifacts during use.

## Reference

[Browse types and exact member contracts](../types/ui-assets/index.md).
