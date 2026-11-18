---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4ca02d27436c2540e506315b2485b183dd7575f28a7088c5b985b3eb5ab83827
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.FileLogSink.Receive(Inno.Core.Logging.LogEntry)
title: FileLogSink.Receive
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
sourceFingerprint: 06de9a1f599b9061f38605c8df10363f77e4e1658a850b0ac6d9e9e956113dae
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `entry`:** The immutable entry to persist.

## Remarks

The router owns scheduling and backpressure. Write failures propagate to its sink quarantine. Retention cannot remove files locked by another active writer and retries them on later rotation.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The sink has been disposed.

**Exception `T:System.IO.IOException`:** An entry cannot be written, flushed or rotated.

**Exception `T:System.UnauthorizedAccessException`:** The caller cannot create the next log file or access the directory.

**Exception `T:System.InvalidOperationException`:** A previous failed rotation left no writable file.
