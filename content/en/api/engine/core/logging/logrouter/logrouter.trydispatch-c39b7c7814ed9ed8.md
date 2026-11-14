---
uid: api.c39b7c7814ed9ed83260006ace8a91d2c7f4d0567a2f6a40d5877538caa3ec8b
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.TryDispatch(Inno.Core.Logging.LogEntry)"
source: xml
reviewed: a0cff379f444b549e3dbd22cef747b92b87844dcdff07b23148038c8521ce339
title: "LogRouter.TryDispatch"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Attempts to queue an immutable entry, draining it inline when the host has no logging worker.

## Parameters

**Parameter `entry`:** The message to accept under the current severity policy.

## Returns

True when accepted or filtered by policy; false when bounded queue capacity is exhausted.

## Remarks

Inline callers serialize delivery. Entries written by a sink callback are queued until every sink has received the current entry, without recursively invoking callbacks.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The router has stopped accepting work.
