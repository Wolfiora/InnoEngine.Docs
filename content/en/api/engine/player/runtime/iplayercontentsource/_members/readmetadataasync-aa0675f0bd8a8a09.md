---
uid: api.aa0675f0bd8a8a092b091591bb84e7bd9346f71c90cccb3460d388c01c5ab387
symbol: "engine:Inno.Player.Runtime:M:Inno.Player.Runtime.IPlayerContentSource.ReadMetadataAsync(System.Threading.CancellationToken)"
source: xml
reviewed: fd6cc9066c20ca22cd860d37b7b36d0fdfeeb402759e7930152e332462aba252
title: "ReadMetadataAsync"
kind: api
owners: [Inno.Player.Runtime]
apiSurface: source-clr
---

Reads the bounded deployment manifest and content catalog before serialization starts.

**Parameter `cancellationToken`:** Cancels metadata acquisition before content preparation starts.

**Returns:** Independently owned metadata bytes; missing or unreadable metadata fails the operation.
