---
uid: api.0a16fb0f5f3fbadda2418793a5b75a077ab3035bebc809b822c934537cd9b733
symbol: "engine:Inno.Editor.PlayMode:M:Inno.Editor.PlayMode.EditorPlayModeLoop.Quiesce"
source: xml
reviewed: e6e013e32f603720ab8e115a66d4a809f81e3c01df81629627f50fdafd5586f0
title: "EditorPlayModeLoop.Quiesce"
kind: api
owners: [Inno.Editor.PlayMode]
apiSurface: source-clr
---

Drains the active Play session before the product tears down editor modules, history or presentation.

**Exception `T:System.InvalidOperationException`:** The session cannot retire within its deadline; the host is faulted and its dependencies must remain alive.
