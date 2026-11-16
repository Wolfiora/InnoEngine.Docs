---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c39b7c7814ed9ed83260006ace8a91d2c7f4d0567a2f6a40d5877538caa3ec8b
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.TryDispatch(Inno.Core.Logging.LogEntry)
title: LogRouter.TryDispatch
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
reviewed: a0cff379f444b549e3dbd22cef747b92b87844dcdff07b23148038c8521ce339
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `entry`:** The message to accept under the current severity policy.

## Returns

True when accepted or filtered by policy; false when bounded queue capacity is exhausted.

## Remarks

Inline callers serialize delivery. Entries written by a sink callback are queued until every sink has received the current entry, without recursively invoking callbacks.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The router has stopped accepting work.
