---
uid: api.0a16fb0f5f3fbadda2418793a5b75a077ab3035bebc809b822c934537cd9b733
symbol: "engine:Inno.Editor.PlayMode:M:Inno.Editor.PlayMode.EditorPlayModeLoop.Quiesce"
source: xml
reviewed: 7c5d4ce3c06d2afff4669211f575d989f7c44dd32952a2e7b797f564f4697ad1
title: "Quiesce"
kind: api
owners: [Inno.Editor.PlayMode]
apiSurface: source-clr
---

Drains the active Play session before the product tears down editor modules, history or presentation.

**Exception `T:System.InvalidOperationException`:** The session cannot retire within its deadline; the host is faulted and its dependencies must remain alive.
