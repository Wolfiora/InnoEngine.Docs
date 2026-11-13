---
uid: api.aa0675f0bd8a8a092b091591bb84e7bd9346f71c90cccb3460d388c01c5ab387
symbol: "engine:Inno.Player.Runtime:M:Inno.Player.Runtime.IPlayerContentSource.ReadMetadataAsync(System.Threading.CancellationToken)"
source: xml
reviewed: edf30c9a0162cc6486af096339db19638a71a0c6e9b8d567503655e6ee26f487
title: "ReadMetadataAsync"
kind: api
owners: [Inno.Player.Runtime]
apiSurface: source-clr
---

Reads the bounded deployment manifest and content catalog before serialization starts.

**Parameter `cancellationToken`:** Cancels metadata acquisition before content preparation starts.

**Returns:** Independently owned metadata bytes; missing or unreadable metadata fails the operation.
