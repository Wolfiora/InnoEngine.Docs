---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c021c204f853281c1d352212e9b53933d084ab4efb2eb4108747c0ddda9c265d
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorStatistic.#ctor(Inno.Editor.Core.EditorStatisticID,Inno.Editor.Core.EditorStatisticGroupID,System.String,System.String,System.String,System.Int32,System.Int32)
title: EditorStatistic.Constructor
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: be40e0ea389ff49625e8deb6e2a7107da4923bdccc70d9032e95fa197be61846
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
