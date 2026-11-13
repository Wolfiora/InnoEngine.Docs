---
uid: api.2bd97725bd5fd4103c2ae020db65f84898259df530d437d9f77e29c892e33c3e
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorStatistics.Publish(System.Collections.Generic.IEnumerable{InnoEditor.Core.EditorStatistic})"
source: xml
reviewed: a2b1d91b00910bea490d254ced783405a224993b8dc22ffe8453e3b0bf0f7126
title: "Publish"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Publishes or replaces several statistics for the current editor frame.

**Parameter `statistics`:** Contributions to publish in enumeration order.

**Exception `T:System.ArgumentNullException`:** Thrown when `statistics` or one of its values is null.
