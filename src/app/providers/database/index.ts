import * as SQLite from '@nativescript/sqlite';

const DATABASE_NAME = 'game_results.db';

export const initializeDatabase = async (): Promise<SQLite.Database> => {
  const db = await new SQLite(DATABASE_NAME);
  await db.execSQL(`
    CREATE TABLE IF NOT EXISTS game_results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      game_id TEXT NOT NULL,
      difficulty INTEGER NOT NULL,
      score INTEGER NOT NULL,
      date TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);
  return db;
};

export const insertGameResult = async (
  db: SQLite.Database,
  gameId: string,
  difficulty: number,
  score: number
): Promise<void> => {
  await db.execSQL(
    `INSERT INTO game_results (game_id, difficulty, score) VALUES (?, ?, ?)`,
    [gameId, difficulty, score]
  );
};

export const getGameResults = async (
  db: SQLite.Database
): Promise<
  Array<{
    id: number;
    game_id: string;
    difficulty: number;
    score: number;
    date: string;
  }>
> => {
  const results: Array<any> = await db.all(
    'SELECT * FROM game_results ORDER BY date DESC'
  );
  return results.map(([id, game_id, difficulty, score, date]) => ({
    id,
    game_id,
    difficulty,
    score,
    date,
  }));
};