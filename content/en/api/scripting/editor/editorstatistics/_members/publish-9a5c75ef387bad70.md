---
uid: api.9a5c75ef387bad70fa73320635262bf19f9343dbec733e287a66b2f2da6f31a6
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorStatistics.Publish(InnoEditor.Core.EditorStatistic)"
source: xml
reviewed: 4bb50fcec07498dcbcdd8e7beb18386bd29320e7c7c479a447ae64bf434e490a
title: "Publish"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Publishes or replaces one statistic for the current editor frame.

**Parameter `statistic`:** Immutable contribution containing no runtime provider references.

**Exception `T:System.ArgumentNullException`:** Thrown when `statistic` is `null`.
