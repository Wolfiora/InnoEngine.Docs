---
uid: api.7e35732c8fb386af9ea11a89df18e1fca81e0371830b9b0909bfd24777b5ef2c
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.DiagnosticLogSink.#ctor(Inno.Core.Diagnostics.DiagnosticHub,Inno.Core.Logging.LogRouter)"
source: xml
reviewed: 278c4cad94938a8248830a98254a1221fc4a792d91e80246bd51d6dbcea571ca
title: "Constructor"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Registers a log presentation for all current and future reports in one hub.

**Parameter `hub`:** The authoritative diagnostic owner.

**Parameter `logs`:** The borrowed destination router, which must outlive this sink.
