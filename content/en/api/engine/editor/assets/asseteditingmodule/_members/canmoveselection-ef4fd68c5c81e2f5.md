---
uid: api.ef4fd68c5c81e2f5bce77386cc2fa3e94a45775823d0df481027644547410fc9
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.CanMoveSelection(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetFileEntry},System.String)"
source: xml
reviewed: e46a3177e7e83479fc9643f474a1ac5b7a0b95fbe6868a8e23f8769bd0a7782d
title: "CanMoveSelection"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Validates every minimal selected source and rejects destination collisions before a batch move.

**Parameter `targets`:** Live source entries in selection order.

**Parameter `targetDirectory`:** The writable project destination.

**Returns:** True when every source can move to a distinct destination.
