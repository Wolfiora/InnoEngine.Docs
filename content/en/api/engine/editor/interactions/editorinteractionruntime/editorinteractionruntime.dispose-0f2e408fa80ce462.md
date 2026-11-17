---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0f2e408fa80ce462e7c6cdc0f5bacb960e4bd6c5c20ca873dd261348572ee266
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractionRuntime.Dispose
title: EditorInteractionRuntime.Dispose
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: c1e52bfd7805ad7dd171bfdb5f95ff038cbeb1658f79e76aa03f25aa78c507a5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:System.AggregateException`:** Thrown after all shutdown stages have been attempted when one or more stages failed.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A stage still owns live work. This runtime retains all remaining stages and rejects new updates.
