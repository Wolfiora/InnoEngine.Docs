---
uid: api.ad19a23ee39b2b3f364b78eada1c5e509f202d1bc0139beee7adf36929e2f8f0
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorStatistic.#ctor(InnoEditor.Core.EditorStatisticId,InnoEditor.Core.EditorStatisticGroupId,System.String,System.String,System.String,System.Int32,System.Int32)"
source: xml
reviewed: 3cf9eaf6c4f786c862832d37f1e971fb72a01be08ca381c0fa7dca1a7a9f1b65
title: "Constructor"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Creates one statistic contribution.

**Parameter `id`:** Globally stable statistic identity used for replacement within a frame.

**Parameter `groupId`:** Stable visual group identity.

**Parameter `groupName`:** User-facing group heading.

**Parameter `label`:** User-facing metric label.

**Parameter `value`:** Already formatted user-facing value.

**Parameter `groupOrder`:** Ascending group presentation order.

**Parameter `order`:** Ascending metric order within the group.

**Exception `T:System.ArgumentException`:** Thrown when an identifier, group name, label, or value is empty.
