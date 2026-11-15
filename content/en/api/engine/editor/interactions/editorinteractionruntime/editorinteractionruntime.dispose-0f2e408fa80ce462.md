---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0f2e408fa80ce462e7c6cdc0f5bacb960e4bd6c5c20ca873dd261348572ee266
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractionRuntime.Dispose
title: EditorInteractionRuntime.Dispose
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 7f14ae5b3c95ea8c4f19afed75bacfcd557082fdb38f63f768105128966dd894

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Releases the resources owned by this implementation.

## Exceptions

**Exception `T:System.AggregateException`:** Thrown after all shutdown stages have been attempted when one or more stages failed.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A stage still owns live work. This runtime retains all remaining stages and rejects new updates.
