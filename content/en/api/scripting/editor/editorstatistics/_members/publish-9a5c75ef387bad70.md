---
uid: api.9a5c75ef387bad70fa73320635262bf19f9343dbec733e287a66b2f2da6f31a6
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorStatistics.Publish(InnoEditor.Core.EditorStatistic)"
source: xml
reviewed: bad6a585e1a20dafc0110cd797cd8ce92ca67944c695785adab2616c109baf72
title: "Publish"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Publishes or replaces one statistic for the current editor frame.

**Parameter `statistic`:** Immutable contribution containing no runtime provider references.

**Exception `T:System.ArgumentNullException`:** Thrown when `statistic` is `null`.
