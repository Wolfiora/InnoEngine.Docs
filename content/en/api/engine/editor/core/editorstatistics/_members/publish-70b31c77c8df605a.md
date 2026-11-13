---
uid: api.70b31c77c8df605a8579cfba51960aad9e64abaacc64e4d9510b6ee3385aacb8
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorStatistics.Publish(System.Collections.Generic.IEnumerable{Inno.Editor.Core.EditorStatistic})"
source: xml
reviewed: 6f5396c2eaae3554dc165dcd24aa9053095f2f4ee47ced3cacbb2e6607e4a84b
title: "Publish"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Publishes or replaces several statistics for the current editor frame.

**Parameter `statistics`:** Contributions to publish in enumeration order.

**Exception `T:System.ArgumentNullException`:** Thrown when `statistics` or one of its values is null.
