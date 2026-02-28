const supabase = require('../config/supabase');

exports.getLogs = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('habit_logs')
      .select('*, habits(name, category)')
      .eq('user_id', req.user.id)
      .order('completed_at', { ascending: false });
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.logHabit = async (req, res) => {
  try {
    const { habit_id, notes, completed_at } = req.body;
    const { data, error } = await supabase
      .from('habit_logs')
      .insert([{ habit_id, notes, completed_at, user_id: req.user.id }])
      .select();
    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteLog = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('habit_logs')
      .delete()
      .eq('id', id)
      .eq('user_id', req.user.id);
    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: 'Log removed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
