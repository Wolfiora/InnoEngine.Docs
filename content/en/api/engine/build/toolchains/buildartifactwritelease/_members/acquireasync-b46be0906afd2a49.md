---
uid: api.b46be0906afd2a49da9b2dfb97ac0b00a1ee64ce99b7d5b8a48c50cccf206160
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildArtifactWriteLease.AcquireAsync(System.String,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: b5920d5f4100707b2fdaee4df1ec724b3a643382bff64505bd80f66c9eb3681b
title: "AcquireAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Waits for all readers before allowing mutation of one immutable artifact directory.

**Parameter `ownerDirectory`:** The exact publisher root retaining the persistent owner.lock gate.

**Parameter `directory`:** The absolute artifact location controlled by the publisher.

**Parameter `cancellationToken`:** Cancels this waiter without disturbing existing readers.

**Returns:** Exclusive protection; retain it through replacement and release it before acquiring a reading lease.

**Exception `T:System.ArgumentException`:** The directory is empty or relative.

**Exception `T:System.TimeoutException`:** Other owners retain the artifact for more than thirty seconds.

**Exception `T:System.OperationCanceledException`:** Waiting was canceled.
