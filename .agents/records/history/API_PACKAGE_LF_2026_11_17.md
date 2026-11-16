# API package line-ending repair

The automatic synchronization commit 9c7a948f45bd486f1c704973a79df3b4fafa3dc3 imported engine 32cd34c21e4bc0c29d9989cf28c745bd1316fecb. Its Windows-produced inventory and six captures were hashed with CRLF, but Git stored LF under this repository's attributes. The first canonical import check correctly rejected the mismatch.

Before correcting the bindings, reconstructing CRLF from each committed LF file reproduced its original producer SHA-256 exactly. No JSON values or source identities changed. Binding hashes and the import receipt now describe the actual LF repository bytes.

Original package identity: `d0a8eee76befad5431a2553b1dd9e31c02b0f41e0a99e3223d15f86b52b45072`.

Canonical repository identity: `40c6760dca5be8bf6b1602bb264c3cf304be28da652347763dd2ab26984ee411`.

| File | Verified producer SHA-256 | Repository SHA-256 |
| --- | --- | --- |
| reference/projects/catalog.json | 990bd21ca963389b33eac3e1013e2b7f650f89dc9cc92433f1af5b5bc308811f | 7553e996014f3861f22207e1308c5affacbda17a6665f11302385f7a552b1214 |
| reference/api/Debug-windows-x64-editor-script.json | 877dde1eacabe50f6f936162f9e09fc3418982c59f2201c7cc40f4b8a0cb2a1e | da780a86d50130cf1b4bec3bf2c5a07f073bad5869c9ece7e520c134c246a385 |
| reference/api/Debug-windows-x64-runtime-script.json | 0cdbde49b84ee35e6b8477436be3fd4cf888fa56308db27678b6a50a26ce4311 | d4b0222d1574ff365f5a44c23beab568a84bfb7be371c14905bdf8ccd51c5679 |
| reference/api/Debug-windows-x64-source-clr.json | 0be2540e750672fd19dd6e94d28a55d3a0dbd02f139f18ead1c794def17fb8b4 | b119729f9fc0bccfb05eaa3f28c2c9972729fb51297f8f1b7d6f1709fb0692c3 |
| reference/api/Release-windows-x64-editor-script.json | 0b7be02692ead63fe3ef2a5bbf17992e94335c0412f16997c81988c9a287a70c | bde83e5d341aa635985f9ee6ff6c7ce17d091590ac2820545d50157910bbd2f2 |
| reference/api/Release-windows-x64-runtime-script.json | d6a0c37c361d88aade133f4956e821e5b51e5578d3694352245c26adcad23ad1 | 90eda8d5a27b955ad5695bfedaac19ab95a92dc885083911778dea676ea7e639 |
| reference/api/Release-windows-x64-source-clr.json | 8c9ac31d19dff07ca8db1af7b3a1d8892a9e4dd8cd75da5230abb205f36800a5 | 8c522452ac6b060c3ba309e47c4b5de84b79c3e6aa689a44bcb33b98617e0f35 |

Engine PR [#84](https://github.com/Wolfiora/InnoEngine/pull/84) fixes aggregation at the source: validate producer bytes first, then normalize published facts to LF and calculate their final hashes. All 11 aggregation cases passed, including CRLF publication and existing corruption, source identity and completeness rejection. The package schema and integrity gates remain unchanged.
