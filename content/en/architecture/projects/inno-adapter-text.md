---
title: Inno.Adapter.Text
description: Explicit host selection and provider snapshots for text backends.
uid: project.inno-adapter-text
kind: project
owners:
  - Inno.Adapter.Text
---
# Inno.Adapter.Text

This project lets composition choose a text backend without changing neutral Text contracts. It contains stable IDs, providers, a catalog and a factory boundary. Creating a catalog does not initialize native libraries or devices.

## Provider and ownership contract

`TextBackendId` is an open ordinal string identity without whitespace; its default struct value is unassigned. The built-in `freeTypeHarfBuzz` identity is one registration, not an exhaustive enum of allowed implementations.

`TextBackendCatalog` captures an explicit provider snapshot and rejects null entries or duplicate IDs. Its supported list is read-only. Creation resolves an exact registered ID, reports an unsupported selection with `NotSupportedException` and rejects a null product with `InvalidOperationException`.

Composition owns provider objects and any resources they retain. The catalog does not take their disposal ownership. Each created `ITextBackend` belongs to its caller, normally a `TextRuntime`; its faces remain local to that backend. No additional assembly scan is performed by this catalog.

## Use and reference

[Add a text backend](../../extending/text-backends.md) describes the provider and service responsibilities. Validate adapter selections before initializing product windows or devices. [Browse exact selection and provider members](../../api/engine/adapter/text/index.md).
