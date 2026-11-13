---
uid: api.91a6191dd8ee0bc45a1971857085a93ef474e90153aa96dbf22c97f83553a3dc
symbol: "engine:Inno.Build:M:Inno.Build.PlayerSupportPackCatalog.Acquire(Inno.Build.BuildTargetId,Inno.Build.IPlayerSupportPackValidator,System.Threading.CancellationToken)"
source: xml
reviewed: 4c36cc647b6258b745a677b51a3af9f53b3dc5e636a0906ede1b7ce66ae74645
title: "Acquire"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Resolves one installed Support Pack after validating its deployment-only closure.

**Parameter `target`:** The platform and architecture identity of the required Support Pack.

**Returns:** Reading ownership of the complete pack; dispose it after its final consumer finishes.

**Exception `T:System.IO.DirectoryNotFoundException`:** Thrown when no Support Pack is installed for `target`.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the pack is empty, contains build-time payload, or lacks its Player executable or native runtimes.

**Parameter `validator`:** The target-owned validator for runtime or linker inputs.

**Parameter `cancellationToken`:** Cancels ownership acquisition or complete content validation before returning a lease.

**Exception `T:System.OperationCanceledException`:** Acquisition or validation was canceled; no reading ownership is transferred.

**Exception `T:System.TimeoutException`:** Exclusive repair or retirement retains the artifact for more than thirty seconds.
