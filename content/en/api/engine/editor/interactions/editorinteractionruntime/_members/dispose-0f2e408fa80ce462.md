---
uid: api.0f2e408fa80ce462e7c6cdc0f5bacb960e4bd6c5c20ca873dd261348572ee266
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractionRuntime.Dispose"
source: xml
reviewed: 8c28909ffcb4c2bd68e53e9e849b233f6eba1b941222256bc8148406634f575e
title: "Dispose"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Releases the resources owned by this implementation.

**Exception `T:System.AggregateException`:** Thrown after all shutdown stages have been attempted when one or more stages failed.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A stage still owns live work. This runtime retains all remaining stages and rejects new updates.
