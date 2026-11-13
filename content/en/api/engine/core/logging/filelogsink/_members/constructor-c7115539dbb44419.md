---
uid: api.c7115539dbb44419864e7918551f4c3cd2ff96352cc2d1473bba611e725bf039
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.FileLogSink.#ctor(System.String,System.Int64,System.Int32)"
source: xml
reviewed: 3b69c04bd923f92f7fa8b6b4d0ac3c28947d5a93218fb0c98d77b17e9e33df45
title: "Constructor"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Opens an isolated log file without creating another queue or delivery worker.

**Parameter `logDirectory`:** Directory in which complete log files are retained.

**Parameter `maxFileSizeBytes`:** Positive rotation threshold. An entry larger than this threshold occupies its own file.

**Parameter `maxFiles`:** Positive number of retained files, including the current file.

**Exception `T:System.ArgumentException`:** The directory is blank or invalid.

**Exception `T:System.ArgumentOutOfRangeException`:** A rotation or retention limit is not positive.

**Exception `T:System.IO.IOException`:** The directory or initial file cannot be opened.

**Exception `T:System.UnauthorizedAccessException`:** The caller cannot create or access the log directory.
