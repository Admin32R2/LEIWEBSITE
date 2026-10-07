// CSC 105 study notes, one entry per chapter.
// Every point is taken from the lecture or laboratory PDFs for that chapter.
// A section can have: points (list), table ({ head, rows }), formula (list), diagrams (ids).

export const NOTES = [
  {
    topic: "Ch 1: Introduction",
    summary: "Architecture is what a computer does as seen by the programmer. Organization is how the hardware carries it out. A computer is built as a stack of levels, each supported by the one below it.",
    sections: [
      {
        heading: "Architecture versus organization",
        points: [
          "**Architecture** is what to do: attributes visible to the programmer, like the instruction set, I/O mechanisms, addressing techniques, and the number of bits used for data.",
          "**Organization** is how to do it: the operational units and their interconnections, like control signals, interfaces, and memory technology.",
          "All Intel x86 or IBM System/370 family members share the same basic architecture. Their organization differs from version to version.",
          "Structure is the way components relate to each other. Function is the operation of each component within that structure.",
        ],
        diagrams: ["arch-vs-org"],
      },
      {
        heading: "Structure and function",
        points: [
          "Every computer does four things: data processing, data storage, data movement, and control.",
          "Top level structure: CPU, memory, I/O, and the system interconnection.",
          "Inside the CPU: ALU, control unit, registers, and the internal CPU interconnection.",
        ],
        diagrams: ["computer-functions", "top-level-structure"],
      },
      {
        heading: "Machine language and the multilevel machine",
        points: [
          "Machine language is the only language the hardware can work with. Every program ends up as machine language.",
          "A virtual machine language is intermediate code for a software emulator or runtime, which translates it for the real hardware.",
          "**Translation** produces a new program first. **Interpretation** runs the program line by line.",
          "Levels 0 to 3 are supported by interpretation. From Level 4 up, support switches to translation by an assembler and a compiler.",
          "Anyone designing a new computer or a new level must know the levels below the top one.",
        ],
        table: {
          head: ["Level", "Name", "Key idea"],
          rows: [
            ["0", "Digital logic", "True hardware, made of gates"],
            ["1", "Microprogramming", "Microprogram interprets Level 2"],
            ["2", "Conventional machine", "Manufacturer's instruction set"],
            ["3", "Operating system machine", "Hybrid level, partial interpretation by the OS"],
            ["4", "Assembly language", "Translated by an assembler"],
            ["5", "Problem oriented language", "Translated by a compiler to Level 3 or 4"],
            ["6+", "Application machines", "Tailored to uses like education, still in research"],
          ],
        },
        diagrams: ["multilevel-machine", "translate-vs-interpret"],
      },
      {
        heading: "Classes of computers",
        table: {
          head: ["Class", "Description"],
          rows: [
            ["Microcomputer", "Smallest, cheapest, most popular. Cheap, easy software drives acceptance"],
            ["Minicomputer", "Specialized tasks like data communications. Disappearing because micros can do the same"],
            ["Mainframe", "Large and fast, supports hundreds of I/O devices, stores huge amounts of data"],
            ["Supercomputer", "Fastest and most expensive. Runs calculations simultaneously for weather and science"],
          ],
        },
        diagrams: ["computer-classes"],
      },
    ],
  },
  {
    topic: "Ch 2: Data Representation",
    summary: "Numbers are converted between bases with the remainder and multiplication methods. Negative integers have four common formats, and real numbers use floating point, standardized as IEEE 754.",
    sections: [
      {
        heading: "Converting between bases",
        points: [
          "Whole part: divide by 2 repeatedly and read the remainders **bottom to top**. 1234 = `10011010010`.",
          "Fraction part: multiply by 2 repeatedly and read the integer parts **top to bottom**. 0.375 = `.011`.",
          "Binary to decimal: add each bit times its power of 2. `101011011` = 347.",
          "Hexadecimal digits are groups of 4 bits and octal digits are groups of 3 bits.",
        ],
        diagrams: ["dec-to-bin-int", "dec-to-bin-frac"],
      },
      {
        heading: "Negative numbers",
        table: {
          head: ["Format", "Rule", "-5 in 8 bits", "Zeros"],
          rows: [
            ["Signed magnitude", "MSB is the sign, rest is the magnitude", "`10000101`", "Two"],
            ["One's complement", "Flip every bit of the positive number", "`11111010`", "Two"],
            ["Two's complement", "One's complement plus 1", "`11111011`", "One"],
            ["Excess-128", "Add 128, then write as unsigned", "`01111011`", "One"],
          ],
        },
        points: [
          "Two's complement is the CPU standard because it has one zero and the same adder handles subtraction.",
          "In 8-bit two's complement the MSB weighs -128, so the range is -128 to +127.",
        ],
        diagrams: ["neg-five", "twos-weights"],
      },
      {
        heading: "Binary arithmetic and overflow",
        points: [
          "Subtract by adding the complement of the subtrahend to the minuend.",
          "Operands with opposite signs can never overflow.",
          "Overflow happens when same sign operands give a result of the opposite sign. Equivalently, the carry into the sign bit differs from the carry out.",
          "127 + 1 in 8 bits gives `10000000`, which is -128.",
          "Multiplication adds shifted partial products. Division is long division with repeated subtraction.",
        ],
        diagrams: ["overflow"],
      },
      {
        heading: "Floating point",
        points: [
          "n = ±f × 10^e. The fraction (mantissa) sets precision, the exponent sets range.",
          "Overflow means too large for the exponent. Underflow means too close to zero and is usually less serious.",
          "With a 3 digit fraction and 2 digit exponent, values run from ±0.100 × 10^-99 to ±0.999 × 10^99, a span of 99 - (-99) = 198.",
          "Addition: align exponents, add mantissas, normalize. Multiplication: multiply mantissas, add exponents, normalize.",
        ],
        diagrams: ["fp-regions", "fp-ops"],
      },
      {
        heading: "IEEE 754",
        table: {
          head: ["Format", "Total bits", "Sign", "Exponent", "Bias", "Fraction"],
          rows: [
            ["Single", "32", "1", "8", "127", "23"],
            ["Double", "64", "1", "11", "1023", "52"],
            ["Extended", "80", "", "", "", ""],
          ],
        },
        formula: ["Value = (-1)^S × 1.fraction × 2^(exponent - bias)", "Stored exponent = actual exponent + bias"],
        points: [
          "The leading 1 is implied and not stored.",
          "25.625 = `1.1001101` × 2^4, giving `0 10000011 10011010000000000000000` = 0x41CD0000.",
          "-25.625 in double precision is 0xC039A00000000000.",
          "`1 10000100 1100110...` decodes to -57.5, since the significand `1.1100110` = 1.796875.",
          "Biased exponents let hardware compare numbers bit by bit from the left.",
        ],
        diagrams: ["ieee-single", "ieee-double", "ieee-encode", "ieee-25625", "ieee-decode", "ieee-5750"],
      },
    ],
  },
  {
    topic: "Ch 3: Central Processing Unit",
    summary: "The CPU fetches, decodes, and executes instructions from memory, one after another. Interrupts let devices and programs get its attention without the CPU constantly checking.",
    sections: [
      {
        heading: "Parts of the CPU",
        table: {
          head: ["Part", "Job"],
          rows: [
            ["ALU", "Takes two operands, performs arithmetic or Boolean operations, stores the result"],
            ["Registers", "Hold temporary results and control information. The PC points to the next instruction"],
            ["Cache", "Small fast memory that keeps the active portion of main memory"],
            ["Control unit and IR", "Turns each opcode, like ADD or MOVE, into control signals"],
            ["Internal bus", "Parallel wires. Speed in MHz, size in bits per transfer"],
            ["I/O functions", "Move data from input devices to memory and results to output devices"],
          ],
        },
        points: [
          "Instead of re-wiring hardware for each task, a program supplies new control signals for each step.",
          "Memory uses binary because two levels are easier to tell apart reliably, and decimal in 4 bits wastes 6 of 16 combinations.",
        ],
        diagrams: ["cpu-parts"],
      },
      {
        heading: "Instruction cycle",
        points: [
          "Fetch: PC holds the address, the instruction is fetched, the PC is incremented, and the instruction goes into the IR.",
          "Execute actions: processor-memory transfer, processor-I/O transfer, data processing, and control such as a jump.",
          "On a byte-addressable 32-bit machine with 4-byte instructions, the PC increments by 4.",
          "A relative branch adds its offset to the already incremented PC.",
        ],
        diagrams: ["instruction-cycle", "fetch-cycle"],
      },
      {
        heading: "Worked laboratory examples",
        points: [
          "Load, Add, Store at 200 to 202 with memory 500 = 10 and 501 = 5 ends with PC = 203, AC = 15, memory 500 = 15.",
          "JZ `0x7410 0008` at 0x1000 with Z = 1: PC becomes 0x1004 on fetch, then 0x1004 + 0x8 = 0x100C.",
          "BEQ R1, R2 with R1 = R2 = 5 and offset 0x18 at 0x1000: target 0x1004 + 0x18 = 0x101C.",
          "Fetch micro-operations: MAR ← [PC], read memory while Z ← [PC] + 4, PC ← [Z] and MDR ← memory, IR ← [MDR].",
        ],
        diagrams: ["trace-ex1", "jz-format", "branch-target"],
      },
      {
        heading: "Interrupts",
        table: {
          head: ["Type", "Kind", "Example"],
          rows: [
            ["Hardware", "Maskable, can be delayed", "Keyboard, mouse"],
            ["Hardware", "Non-maskable, handled at once", "Power failure, hardware failure"],
            ["Software", "Normal, planned", "System call to open a file or print"],
            ["Software", "Exception, unplanned", "Divide by zero, overflow, invalid opcode"],
          ],
        },
        points: [
          "The program that serves an interrupt is the interrupt service routine (ISR).",
          "Polling checks each device in turn. It wastes time, has no priority, and cannot ignore a request, so interrupts are preferred.",
          "Timeline: T1 interrupt latency, T2 interrupt processing time, T3 interrupt termination time.",
        ],
        diagrams: ["interrupt-types", "interrupt-timeline", "poll-vs-interrupt"],
      },
    ],
  },
  {
    topic: "Ch 4: System Bus",
    summary: "A bus is a shared pathway. The system bus has three parts: the address bus says where, the control bus says what to do, and the data bus carries the value.",
    sections: [
      {
        heading: "The three buses",
        table: {
          head: ["Bus", "Direction", "Carries", "Key fact"],
          rows: [
            ["Address", "One way, from the CPU", "The memory or I/O location", "Width sets max memory, 2^n locations"],
            ["Data", "Both ways", "Data and instructions alike", "Width is a key factor in performance"],
            ["Control", "Both ways", "Read/write, interrupts, clock, reset, status", "Coordinates the other two"],
          ],
        },
        points: [
          "A 32-bit data bus is 32 separate single-bit channels.",
          "The Intel 8080 has a 16-bit address bus, giving 2^16 = 64K locations. A 32-bit address bus reaches 2^32 locations.",
        ],
        diagrams: ["system-bus", "bus-read", "address-width"],
      },
      {
        heading: "Sharing the bus",
        points: [
          "Devices request the bus, and **bus arbitration** lets only one transmit at a time.",
          "Too many devices on one bus cause propagation delays and a bottleneck as traffic nears capacity.",
          "Multiple buses allow parallel transfers and less contention, at the cost of complexity, money, and harder maintenance.",
        ],
        diagrams: ["arbitration"],
      },
      {
        heading: "Types of bus",
        table: {
          head: ["Type", "Purpose", "Examples"],
          rows: [
            ["Local bus", "Fast, direct link between core parts", "CPU to RAM, dedicated graphics bus"],
            ["System bus", "Main bus and central hub for the others", "CPU, memory, core components"],
            ["Expansion bus", "Connects peripherals and add-on devices", "USB, PCI, ISA"],
          ],
        },
        diagrams: ["multi-bus"],
      },
    ],
  },
  {
    topic: "Ch 5: Memory",
    summary: "Memory is arranged in a hierarchy so the CPU usually finds data in small fast levels while large cheap levels hold everything. Caches, write policies, and virtual memory make this work.",
    sections: [
      {
        heading: "Characteristics and access methods",
        points: [
          "Internal memory: registers, cache, RAM. External memory: disks and tape.",
          "Internal transfers follow the data bus width. External transfers use blocks.",
          "Cycle time = access time + recovery time. RAM transfer rate = 1 / cycle time.",
        ],
        table: {
          head: ["Method", "How it finds data", "Example"],
          rows: [
            ["Sequential", "Reads in order from the start", "Tape"],
            ["Direct", "Jumps near the block, then searches", "Disk"],
            ["Random", "Exact address, constant time", "RAM"],
            ["Associative", "Compares contents, constant time", "Cache"],
          ],
        },
        diagrams: ["access-methods"],
      },
      {
        heading: "Timing formulas",
        formula: [
          "Non-RAM: TN = TA + N/R, so R = N / (TN - TA)",
          "Disk: Tr = ½ × (60 / RPM), TA = Ts + Tr, TN = TA + block size / R",
          "Two levels: TA = h × M1 + (1 - h)(M1 + M2)",
          "AMAT = hit time + miss rate × miss penalty, solved from the bottom level up",
        ],
        points: [
          "1,000 bits, TN = 0.00055 s, TA = 0.0005 s gives R = 20 Mbps.",
          "5 ms seek, 7200 RPM, 50 MB/s, 512 B gives TN ≈ 9.18 ms. A 4 KB block only takes 9.25 ms.",
          "L1 1 ns at 90%, L2 5 ns at 80%, RAM 100 ns gives AMAT = 3.5 ns, with 98% of requests served by a cache.",
        ],
        diagrams: ["disk-time", "amat"],
      },
      {
        heading: "Memory hierarchy",
        points: [
          "Going down: lower cost per bit, more capacity, slower access, accessed less often.",
          "It works because of locality. Temporal: the same item is used again soon. Spatial: nearby items are used soon.",
          "Design questions: how much, how fast, how expensive.",
          "Hit rate + miss rate = 100% at each level, counting only requests that reach it. The lowest level hits 100%.",
        ],
        diagrams: ["hierarchy"],
      },
      {
        heading: "Semiconductor memory",
        table: {
          head: ["", "DRAM", "SRAM"],
          rows: [
            ["Stores bits as", "Charge in capacitors", "On/off switches"],
            ["Refresh", "Needed, charge leaks", "Not needed"],
            ["Cost and size", "Cheaper, smaller per bit", "More expensive, larger per bit"],
            ["Speed", "Slower", "Faster"],
            ["Used for", "Main memory", "Cache"],
          ],
        },
        points: [
          "Volatile memory loses data when power is off. ROM is non-erasable except by destroying it.",
          "ROM holds microprograms, library subroutines, the BIOS, and function tables.",
          "PROM is programmed once. EPROM is erased with UV light. EEPROM is erased electrically but writes slowly.",
        ],
        diagrams: ["dram-vs-sram", "rom-types"],
      },
      {
        heading: "Cache",
        points: [
          "On a miss, the whole block is read into a cache line, then delivered. Tags say which block is in each line.",
          "Most current CPUs use 64-byte lines. An 8192-byte cache with 64-byte lines has 128 lines.",
          "Direct mapping: one possible line, so no replacement choice. Fully associative: any line, every tag is searched. Set associative: one set, any line in it.",
          "Replacement: LRU removes the longest unreferenced line, FIFO the oldest, LFU the least used, random any candidate.",
          "16 MB memory, 64 KB 4-way cache, 256 B blocks gives tag 10, set 6, offset 8. Address 0x42C8A4 maps to set 8.",
        ],
        diagrams: ["cache-read", "block12-mapping", "direct-address", "assoc-address", "set-assoc-address"],
      },
      {
        heading: "Write policies and virtual memory",
        table: {
          head: ["Policy", "On a write", "Trade-off"],
          rows: [
            ["Write through", "Cache and memory together", "Consistent, but slower and more bandwidth"],
            ["Write back", "Cache only, dirty bit set", "Fast, but harder to keep coherent"],
            ["Write-around", "Memory only, skips the cache", "Less cache pollution, later reads may miss"],
          ],
        },
        points: [
          "Virtual memory enlarges the addresses a program can use by moving unused RAM pages to a page file on disk.",
          "Each process has its own page table, indexed by virtual page number. Entries hold the physical page number, permissions, a dirty bit, and LRU data.",
        ],
        diagrams: ["write-policies", "virtual-memory"],
      },
    ],
  },
];
