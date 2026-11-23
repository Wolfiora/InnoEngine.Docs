---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f69edd8d56f8c25df061c15523b253b2d07b019a81620d1729acb31c52ee3096
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorStatistic.#ctor(InnoEditor.Core.EditorStatisticID,InnoEditor.Core.EditorStatisticGroupID,System.String,System.String,System.String,System.Int32,System.Int32)
title: EditorStatistic.Constructor
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: 4648c8dc72fefe548f43bb7a11206bd7ae8734a23edbf0d5c3c439069ccb7b3b
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Globally stable statistic identity used for replacement within a frame.

**Parameter `groupID`:** Stable visual group identity.

**Parameter `groupName`:** User-facing group heading.

**Parameter `label`:** User-facing metric label.

**Parameter `value`:** Already formatted user-facing value.

**Parameter `groupOrder`:** Ascending group presentation order.

**Parameter `order`:** Ascending metric order within the group.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when an identifier, group name, label, or value is empty.
