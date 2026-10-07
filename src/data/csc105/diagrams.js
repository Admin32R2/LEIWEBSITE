// CSC 105 diagrams, written as Mermaid code (diagrams-as-code, per .claude/tech-docs).
// One idea per diagram, every arrow labelled, and each one cites the lesson it is grounded in.
// Questions and study notes refer to these by id.

const L1 = "Chapter 1 lecture";
const L2 = "Chapter 2 lecture";
const X2 = "Chapter 2 laboratory exercises";
const L3 = "Chapter 3 lecture";
const X3 = "Chapter 3 laboratory exercises";
const L4 = "Chapter 4 lecture";
const L5 = "Chapter 5 lecture";
const X5 = "Chapter 5 laboratory exercises";

export const DIAGRAMS = {
  // Chapter 1
  "arch-vs-org": {
    title: "Architecture versus organization",
    source: L1,
    code: `flowchart LR
  subgraph A ["Architecture: what to do"]
    a1["Instruction set"]
    a2["I/O mechanisms"]
    a3["Addressing techniques"]
    a4["Bits used for data"]
  end
  subgraph O ["Organization: how to do it"]
    o1["Control signals"]
    o2["Interfaces"]
    o3["Memory technology"]
  end
  A -->|"is implemented by"| O
  A -.->|"same across a family, like Intel x86"| F["Family of models"]
  O -.->|"differs between versions"| F`,
  },
  "computer-functions": {
    title: "The four functions every computer performs",
    source: L1,
    code: `flowchart TB
  C["Control"] -->|"coordinates"| P["Data processing"]
  C -->|"coordinates"| S["Data storage"]
  C -->|"coordinates"| M["Data movement"]
  M -->|"moves data to and from"| S
  M -->|"feeds"| P`,
  },
  "top-level-structure": {
    title: "Top level structure of a computer",
    source: L1,
    code: `flowchart LR
  subgraph CPU ["CPU"]
    ALU["ALU"]
    CU["Control unit"]
    REG["Registers"]
    ICI["Internal CPU interconnection"]
  end
  CPU <-->|"system interconnection"| MEM["Main memory"]
  CPU <-->|"system interconnection"| IO["I/O"]`,
  },
  "multilevel-machine": {
    title: "Multilevel machine and how each level is supported",
    source: L1,
    code: `flowchart TB
  L6["Level 6 and above: application tailored machines"] -->|"translation"| L5
  L5["Level 5: problem oriented language"] -->|"translation by compiler"| L4
  L4["Level 4: assembly language"] -->|"translation by assembler"| L3
  L3["Level 3: operating system machine"] -->|"partial interpretation by the OS"| L2
  L2["Level 2: conventional machine (ISA)"] -->|"interpretation by microprogram"| L1
  L1["Level 1: microprogramming"] -->|"directly executed by hardware"| L0
  L0["Level 0: digital logic (gates)"]`,
  },
  "translate-vs-interpret": {
    title: "Translation versus interpretation",
    source: L1,
    code: `flowchart LR
  subgraph T ["Translation"]
    t1["Source program"] -->|"converted all at once"| t2["New program in lower level language"]
    t2 -->|"then executed"| t3["Result"]
  end
  subgraph I ["Interpretation"]
    i1["Source program"] -->|"one instruction at a time"| i2["Interpreter executes it"]
    i2 -->|"next line"| i1
  end`,
  },
  "computer-classes": {
    title: "Classes of computers",
    source: L1,
    code: `flowchart TB
  MI["Microcomputer: smallest, cheapest, most popular"] -->|"bigger, specialized tasks"| MN["Minicomputer: data communications, disappearing"]
  MN -->|"hundreds of I/O devices"| MF["Mainframe: huge data repositories"]
  MF -->|"fastest and most expensive"| SC["Supercomputer: weather, scientific research"]`,
  },

  // Chapter 2
  "dec-to-bin-int": {
    title: "Remainder method: 25 to binary",
    source: X2,
    code: `flowchart TB
  a["25 ÷ 2 = 12, r 1"] --> b["12 ÷ 2 = 6, r 0"]
  b --> c["6 ÷ 2 = 3, r 0"]
  c --> d["3 ÷ 2 = 1, r 1"]
  d --> e["1 ÷ 2 = 0, r 1"]
  e -->|"read remainders bottom to top"| r["11001"]`,
  },
  "dec-to-bin-frac": {
    title: "Multiplication method: 0.625 to binary",
    source: X2,
    code: `flowchart TB
  a["0.625 × 2 = 1.25, take 1"] --> b["0.25 × 2 = 0.5, take 0"]
  b --> c["0.5 × 2 = 1.0, take 1"]
  c -->|"read integer parts top to bottom"| r[".101"]`,
  },
  "neg-five": {
    title: "Four ways to write -5 in 8 bits",
    source: L2,
    code: `flowchart LR
  P["+5 = 00000101"] -->|"set the sign bit to 1"| SM["Signed magnitude: 10000101"]
  P -->|"flip every bit"| OC["One's complement: 11111010"]
  OC -->|"add 1"| TC["Two's complement: 11111011"]
  N["-5"] -->|"add bias 128 to get 123"| EX["Excess-128: 01111011"]`,
  },
  "twos-weights": {
    title: "Reading an 8-bit two's complement number",
    source: X2,
    code: `packet
  title 11111011 = -128 + 64 + 32 + 16 + 8 + 2 + 1 = -5
  0-0: "-128"
  1-1: "64"
  2-2: "32"
  3-3: "16"
  4-4: "8"
  5-5: "4"
  6-6: "2"
  7-7: "1"`,
  },
  overflow: {
    title: "Detecting overflow when adding signed numbers",
    source: L2,
    code: `flowchart TD
  A["Add two signed numbers"] --> B{"Do the operands have the same sign?"}
  B -->|"no"| N["Overflow cannot occur"]
  B -->|"yes"| C{"Does the result have the opposite sign?"}
  C -->|"no"| OK["Result is valid"]
  C -->|"yes"| OV["Overflow. Carry into sign bit differs from carry out"]`,
  },
  "fp-regions": {
    title: "Number line for a 3 digit fraction and 2 digit exponent",
    source: L2,
    code: `flowchart TB
  r1["Negative overflow"] -->|"-0.999 × 10^99"| r2["Expressible negative numbers"]
  r2 -->|"-0.100 × 10^-99"| r3["Negative underflow"]
  r3 --> r4["Zero"]
  r4 --> r5["Positive underflow"]
  r5 -->|"+0.100 × 10^-99"| r6["Expressible positive numbers"]
  r6 -->|"+0.999 × 10^99"| r7["Positive overflow"]`,
  },
  "ieee-single": {
    title: "IEEE 754 single precision: 1 sign, 8 exponent (excess 127), 23 fraction bits",
    source: L2,
    code: `packet
  0-0: "S"
  1-8: "Exponent"
  9-31: "Fraction (after the implied 1)"`,
  },
  "ieee-double": {
    title: "IEEE 754 double precision: 1 sign, 11 exponent (excess 1023), 52 fraction bits",
    source: L2,
    code: `packet
  0-0: "S"
  1-11: "Exponent"
  12-63: "Fraction (after the implied 1)"`,
  },
  "ieee-encode": {
    title: "Steps to encode a decimal number in IEEE 754",
    source: X2,
    code: `flowchart TD
  A["Decimal number, like 25.625"] -->|"remainder and multiplication methods"| B["Binary: 11001.101"]
  B -->|"move the point after the first 1"| C["Normalized: 1.1001101 × 2^4"]
  C -->|"sign of the number"| S["Sign bit: 0"]
  C -->|"exponent + 127"| E["4 + 127 = 131 = 10000011"]
  C -->|"bits after the point, pad to 23"| F["10011010000000000000000"]
  S --> R["0 10000011 10011010000000000000000 = 0x41CD0000"]
  E --> R
  F --> R`,
  },
  "ieee-25625": {
    title: "25.625 in IEEE 754 single precision",
    source: X2,
    code: `packet
  0-0: "0"
  1-8: "10000011"
  9-31: "10011010000000000000000"`,
  },
  "ieee-decode": {
    title: "Decoding 11000010011001100000000000000000 to -57.5",
    source: X2,
    code: `flowchart TD
  A["11000010011001100000000000000000"] -->|"split by position: 1, 8, 23 bits"| B["1 | 10000100 | 11001100000000000000000"]
  B -->|"bit 1"| S["Sign = 1, so negative"]
  B -->|"bits 2 to 9"| E["Exponent 10000100 = 132"]
  B -->|"bits 10 to 32"| F["Fraction 1100110 then zeros"]
  E -->|"subtract the bias"| E2["132 - 127 = 5"]
  F -->|"put the implied 1 in front"| G["Significand 1.1100110"]
  G -->|"add the weights of the 1 bits"| H["1 + 0.5 + 0.25 + 0.03125 + 0.015625 = 1.796875"]
  G -.->|"shortcut: 11100110 = 230"| H2["230 ÷ 2^7 = 230 ÷ 128 = 1.796875"]
  S --> R["-1 × 1.796875 × 2^5 = -1.796875 × 32 = -57.5"]
  E2 --> R
  H --> R`,
  },
  "ieee-5750": {
    title: "-57.5 in IEEE 754 single precision: 1 sign bit, 8 exponent bits, then 23 fraction bits",
    source: X2,
    code: `packet
  0-0: "1"
  1-8: "10000100"
  9-31: "11001100000000000000000"`,
  },
  "ieee-212": {
    title: "212 in IEEE 754 single precision (0x43540000)",
    source: L2,
    code: `packet
  0-0: "0"
  1-8: "10000110"
  9-31: "10101000000000000000000"`,
  },
  "fp-ops": {
    title: "Floating point arithmetic steps",
    source: L2,
    code: `flowchart LR
  subgraph AS ["Addition and subtraction"]
    a1["Align the exponents"] --> a2["Add or subtract the mantissas"] --> a3["Normalize the result"]
  end
  subgraph MD ["Multiplication and division"]
    m1["Multiply or divide the mantissas"] --> m2["Add or subtract the exponents"] --> m3["Normalize the result"]
  end`,
  },

  // Chapter 3
  "cpu-parts": {
    title: "Parts of the CPU and how it connects outward",
    source: L3,
    code: `flowchart LR
  subgraph CPU ["CPU"]
    CU["Control unit + IR"] -->|"control signals"| ALU["ALU"]
    REG["Registers: PC, IR, AC"] <-->|"operands and results"| ALU
    CACHE["Cache"] <-->|"active data"| REG
  end
  CPU <-->|"address, data, control buses"| MEM["Main memory"]
  CPU <-->|"I/O functions"| IO["Input and output devices"]`,
  },
  "instruction-cycle": {
    title: "Instruction cycle",
    source: L3,
    code: `stateDiagram-v2
  [*] --> Fetch: power on
  Fetch --> Decode: instruction in IR, PC incremented
  Decode --> Execute: control unit knows the operation
  Execute --> Interrupt: interrupt pending
  Execute --> Fetch: no interrupt, next instruction
  Interrupt --> Fetch: ISR done, resume program
  Execute --> [*]: halt`,
  },
  "fetch-cycle": {
    title: "Fetch cycle in detail",
    source: L3,
    code: `flowchart LR
  PC["PC holds address of next instruction"] -->|"address bus"| MEM["Memory location"]
  MEM -->|"data bus"| IR["Instruction register"]
  PC -->|"increment, unless told otherwise"| PC2["PC points to the next instruction"]
  IR -->|"decode"| CU["Control unit interprets it"]`,
  },
  "trace-ex1": {
    title: "Tracing the program at addresses 200 to 202",
    source: X3,
    code: `sequenceDiagram
  autonumber
  participant CPU as CPU (PC, IR, AC)
  participant M as Memory
  Note over CPU: PC = 200, AC = 0
  CPU->>M: fetch from 200
  M-->>CPU: 0005 500 (Load AC)
  CPU->>M: read 500
  M-->>CPU: 10
  Note over CPU: PC = 201, AC = 10
  CPU->>M: fetch from 201
  M-->>CPU: 0101 501 (Add to AC)
  CPU->>M: read 501
  M-->>CPU: 5
  Note over CPU: ALU adds 10 + 5, PC = 202, AC = 15
  CPU->>M: fetch from 202
  M-->>CPU: 0010 500 (Store AC)
  CPU->>M: write 15 to 500
  Note over CPU,M: PC = 203, AC = 15, memory 500 = 15`,
  },
  "jz-format": {
    title: "JZ instruction 0x7410 0008: 8-bit opcode, 4-bit condition, 20-bit offset",
    source: X3,
    code: `packet
  0-7: "Opcode 0x74"
  8-11: "Cond 1"
  12-31: "Offset 0x00008 (signed)"`,
  },
  "branch-target": {
    title: "How a relative branch picks the next PC",
    source: X3,
    code: `flowchart TD
  F["Fetch at PC = 0x1000"] -->|"PC + 4 during fetch"| P["PC = 0x1004"]
  P --> C{"Is the condition true?"}
  C -->|"no, branch not taken"| N["Next PC stays 0x1004"]
  C -->|"yes, branch taken"| T["PC = 0x1004 + offset"]
  T --> J["JZ with offset 0x8 gives 0x100C"]
  T --> B["BEQ with offset 0x18 gives 0x101C"]`,
  },
  "interrupt-types": {
    title: "Types of interrupts",
    source: L3,
    code: `flowchart TB
  I["Interrupt"] --> H["Hardware: from an external device"]
  I --> S["Software: from an instruction or the processor itself"]
  H --> HM["Maskable: can be delayed, like keyboard or mouse"]
  H --> HN["Non-maskable: handled at once, like power or hardware failure"]
  S --> SN["Normal: system calls, like opening a file"]
  S --> SE["Exception: unplanned, like divide by zero or invalid opcode"]`,
  },
  "interrupt-timeline": {
    title: "Interrupt handling timeline",
    source: L3,
    code: `sequenceDiagram
  participant D as Device
  participant CPU as CPU
  participant ISR as Interrupt service routine
  D->>CPU: interrupt request
  Note over CPU: T1 interrupt latency, finish current work and save state
  CPU->>ISR: jump to handler
  Note over ISR: T2 interrupt processing time, serve the device
  ISR-->>CPU: return
  Note over CPU: T3 interrupt termination time, restore state and resume`,
  },
  "poll-vs-interrupt": {
    title: "Polling versus interrupts",
    source: L3,
    code: `flowchart LR
  subgraph P ["Polling"]
    p1["Check device 1"] --> p2["Check device 2"] --> p3["Check device 3"] -->|"round robin, even if nobody needs service"| p1
  end
  subgraph I ["Interrupt"]
    i1["CPU runs its program"] -->|"device raises a request"| i2["Serve by priority in the ISR"]
    i2 -->|"return"| i1
  end`,
  },

  // Chapter 4
  "system-bus": {
    title: "The three buses of the system bus",
    source: L4,
    code: `flowchart LR
  CPU["CPU"] -->|"address bus: one way, from the CPU"| MEM["Memory"]
  CPU -->|"address bus"| IO["I/O devices"]
  CPU <-->|"data bus: both ways"| MEM
  CPU <-->|"data bus"| IO
  CPU <-->|"control bus: read/write, interrupts, clock, reset"| MEM
  IO -.->|"control bus: interrupt request, status"| CPU`,
  },
  "bus-read": {
    title: "A memory read using all three buses",
    source: L4,
    code: `sequenceDiagram
  autonumber
  participant CPU
  participant MEM as Memory
  CPU->>MEM: address bus carries the location
  CPU->>MEM: control bus carries the read command
  MEM-->>CPU: data bus carries the data back
  MEM-->>CPU: control bus carries status, operation complete`,
  },
  "address-width": {
    title: "Address bus width sets the maximum memory",
    source: L4,
    code: `flowchart LR
  n["n address lines"] -->|"2 to the power n"| loc["Number of locations"]
  loc --> e1["1 bit: 2 locations"]
  loc --> e2["16 bits, Intel 8080: 65,536 = 64K"]
  loc --> e3["32 bits: 4,294,967,296 = 4G"]`,
  },
  arbitration: {
    title: "Bus interconnection scheme with arbitration",
    source: L4,
    code: `flowchart LR
  D1["CPU"] -->|"request"| ARB{"Bus arbitration"}
  D2["Memory controller"] -->|"request"| ARB
  D3["I/O unit"] -->|"request"| ARB
  ARB -->|"grant to one device at a time"| W["Winner sends address, data, and control signals"]
  W -->|"over the shared bus"| T["Target device receives"]`,
  },
  "multi-bus": {
    title: "Multiple-bus architecture",
    source: L4,
    code: `flowchart LR
  CPU["CPU"] <-->|"local bus"| CACHE["Cache"]
  CPU <-->|"system bus"| MEM["Main memory"]
  CPU <-->|"high-speed bus"| GPU["Graphics card"]
  MEM <-->|"system bus is the hub"| BR["Bus bridge"]
  BR <-->|"expansion bus"| EXP["USB, PCI, ISA devices"]`,
  },

  // Chapter 5
  hierarchy: {
    title: "Memory hierarchy",
    source: L5,
    code: `flowchart TB
  R["Registers"] --> L1["L1 cache"] --> L2["L2 cache"] --> MM["Main memory"] --> DC["Disk cache"] --> MD["Magnetic disk"] --> OP["Optical"] --> TP["Tape"]
  UP["Going up: faster access, higher cost per bit"] -.-> R
  TP -.-> DOWN["Going down: more capacity, lower cost per bit, slower, accessed less often"]`,
  },
  "access-methods": {
    title: "Access methods",
    source: L5,
    code: `flowchart TB
  A["Access methods"] --> S["Sequential: read in order from the start, like tape"]
  A --> D["Direct: jump near the block then search, like disk"]
  A --> R["Random: address picks the exact location, like RAM"]
  A --> AS["Associative: find data by comparing contents, like cache"]`,
  },
  "disk-time": {
    title: "Total time for one disk request",
    source: X5,
    code: `flowchart TB
  TS["Seek time Ts = 5 ms"] -->|"plus"| TR["Rotational latency Tr = half of 60/7200 s = 4.17 ms"]
  TR -->|"gives TA = 9.17 ms"| TT["Transfer time 512 B ÷ 50 MB/s = 0.01 ms"]
  TT -->|"TN = TA + Tt"| TN["TN = 9.18 ms"]`,
  },
  amat: {
    title: "Average memory access time with two caches",
    source: X5,
    code: `flowchart TB
  CPU["CPU request"] --> L1["L1: hit time 1 ns, hit rate 90%"]
  L1 -->|"10% miss"| L2["L2: hit time 5 ns, local hit rate 80%"]
  L2 -->|"20% miss"| RAM["RAM: 100 ns"]
  L2 -.->|"L1 miss penalty = 5 + 0.20 × 100 = 25 ns"| P["AMAT = 1 + 0.10 × 25 = 3.5 ns"]`,
  },
  "dram-vs-sram": {
    title: "DRAM versus SRAM",
    source: L5,
    code: `flowchart LR
  subgraph D ["DRAM: main memory"]
    d1["Bits stored as charge in capacitors"] -->|"charge leaks"| d2["Needs refresh circuits"]
    d2 --> d3["Simpler, smaller, cheaper, slower"]
  end
  subgraph S ["SRAM: cache"]
    s1["Bits stored as on/off switches"] -->|"nothing leaks"| s2["No refresh needed"]
    s2 --> s3["Complex, larger, costly, faster"]
  end`,
  },
  "rom-types": {
    title: "Types of ROM",
    source: L5,
    code: `flowchart LR
  ROM["ROM"] --> M["Written during manufacture: costly for small runs"]
  ROM --> P["PROM: programmable once, needs special equipment"]
  ROM --> E["EPROM: erased by UV light"]
  ROM --> EE["EEPROM: erased electrically, writing is much slower than reading"]`,
  },
  "cache-read": {
    title: "Cache read operation",
    source: L5,
    code: `flowchart TD
  A["CPU requests a memory location"] --> B{"Is it in the cache? Check the tags"}
  B -->|"yes, a hit"| C["Deliver from cache, fast"]
  B -->|"no, a miss"| D["Read the whole block from main memory into a cache line"]
  D -->|"then"| C`,
  },
  "block12-mapping": {
    title: "Where block 12 can go in an 8 block cache",
    source: L5,
    code: `flowchart LR
  B["Memory block 12"] -->|"fully associative"| FA["Any of the 8 lines"]
  B -->|"direct mapped: 12 mod 8"| DM["Only line 4"]
  B -->|"2-way set associative: 12 mod 4"| SA["Either line of set 0"]`,
  },
  "direct-address": {
    title: "Direct mapping, 24-bit address: 8-bit tag, 14-bit line, 2-bit word",
    source: L5,
    code: `packet
  0-7: "Tag"
  8-21: "Line"
  22-23: "Word"`,
  },
  "assoc-address": {
    title: "Associative mapping, 24-bit address: 22-bit tag, 2-bit word",
    source: L5,
    code: `packet
  0-21: "Tag"
  22-23: "Word"`,
  },
  "set-assoc-address": {
    title: "4-way set associative, 24-bit address: 10-bit tag, 6-bit set, 8-bit offset",
    source: X5,
    code: `packet
  0-9: "Tag"
  10-15: "Set"
  16-23: "Offset"`,
  },
  "write-policies": {
    title: "Cache write policies",
    source: L5,
    code: `flowchart LR
  W["CPU writes data"] -->|"write through"| WT["Cache and main memory updated together"]
  W -->|"write back"| WB["Cache only, dirty bit set"]
  WB -->|"on replacement, if dirty"| MM["Write block to main memory"]
  W -->|"write around"| WA["Main memory only, cache skipped"]
  WA -->|"cache filled only if read again"| RC["Later read"]`,
  },
  "virtual-memory": {
    title: "Virtual memory address translation",
    source: L5,
    code: `flowchart LR
  VA["Virtual address: virtual page number + offset"] -->|"VPN indexes"| PT["This process's page table"]
  PT -->|"page table entry: physical page number, permissions, dirty bit, LRU"| PA["Physical page number + same offset"]
  PA --> RAM["Main memory"]
  PT -.->|"page not in RAM"| PF["Page file on the hard disk"]
  PF -.->|"copy page in, swap an unused one out"| RAM`,
  },
};
