---
uid: api.7ba11b33669369b58739f7c874228f1585f03afb7e28429c5aa8e3b296d2f9c8
symbol: "engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.ScriptCompilationStageTiming.#ctor(System.String,System.TimeSpan)"
source: xml
reviewed: ec8aa6e3708e38bd8767592c7190bc3073fea4bd12a8a9cf433b25b6e8e72852
title: "Constructor"
kind: api
owners: [Inno.Scripting.Compiler]
apiSurface: source-clr
---

Creates one immutable stage timing sample.

**Parameter `stage`:** The human-readable stage description.

**Parameter `elapsed`:** The wall time spent in the stage.

**Exception `T:System.ArgumentException`:** Thrown when `stage` is empty or contains only whitespace.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `elapsed` is negative.
